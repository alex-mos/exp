/* eslint-disable no-console */
import { task } from 'ember-concurrency';
import tus from 'npm:tus-js-client'; // протокол загрузки файла с возможностью докачки
// import sha256 from 'npm:js-sha256';
import geotiff from 'npm:geotiff';

let _crypto = window.crypto || window.msCrypto;

export default Ember.Service.extend({
  ajax: Em.inject.service(),
  store: Em.inject.service(),
  modal: Em.inject.service(),
  uiSnackbar: Em.inject.service(),
  router: Em.inject.service(),

  shaChecksum: null,
  isReadyToUpload: true,
  csrfToken: null,

  tusUpload: null, // tus object

  isUploading: Em.computed.reads('uploadFileTask.isRunning'),

  records: [],

  getLayersCount(file) { // Возвращает промис с количеством слоёв изображения
    return new Em.RSVP.Promise(function(resolve) {
      let reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = () => {
        let fileContent = reader.result;
        let tiff = geotiff.parse(fileContent);
        let image = tiff.getImage();
        resolve(image.fileDirectory.BitsPerSample.length);
      };
    });
  },

  // Цепочка вызовов всех этапов загрузки файла
  addGeotiff: task(function * (model) {

    if (model.get('isNew')) {
      this.get('records').unshiftObject(model);
    }

    this.set('isReadyToUpload', false);
    let shaChecksum = yield this.getSha256(model.get('file'));
    model.set('checksum', shaChecksum);

    let response = yield this.getToken();

    this.set('csrfToken', response.jqXHR.getResponseHeader('x-csrf-token'));

    this.set('isReadyToUpload', true);

    let foundModel = yield this.get('store').query('geotiff', { filter: { checksum: shaChecksum } }).then(rslt => rslt.get('firstObject'));

    if (foundModel) {
      foundModel.set('file', model.get('file'));

      if (model.get('isNew')) {
        model.deleteRecord();
        this.get('records').removeObject(model);
      }
      model = foundModel;
    }

    if (model.get('state') < 20) {
      yield model.save().then(() => {
        let uploadFileTask = this.get('uploadFileTask');

        model.set('task', uploadFileTask);

        uploadFileTask.perform(model.get('file'), model.get('token'), model);
      }, () => {
        this.get('modal').openSystemModal('import-error', { message: 'error' });
        model.deleteRecord();
      });
    } else {
      this.get('modal').openSystemModal('import-error', { message: 'already_exist' });

      yield Ember.RSVP.reject();
    }

  }),

  // Возвращает промис с sha-256-хешем файла
  getSha256(file) {
    return new Em.RSVP.Promise(function(resolve) {
      let reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = async function() {
        let fileContent = reader.result;
        // hash the message
        const hashBuffer = await _crypto.subtle.digest('SHA-256', fileContent);

        // convert ArrayBuffer to Array
        const hashArray = Array.from(new Uint8Array(hashBuffer));

        // convert bytes to hex string
        const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');

        resolve(hashHex);
      };
    });
  },

  // Возвращает промис с CSRF-токеном
  getToken() {
    let url = '//big1.efarm.pw/api/ping';
    return this.get('ajax').raw(url, {
      method: 'GET',
      data: {}
    });
  },

  uploadFileTask: task(function * (file, token, model) {

    yield new Em.RSVP.Promise((resolve, reject) => {

      let upload = new tus.Upload(file, {
        endpoint: '//big1.efarm.pw/uploads',
        headers: {'X-Upload-Token': token},
        chunkSize: 1024 * 1024 * 10, // 10 Mb
        retryDelays: !Em.testing ? [0, 1000, 3000, 5000] : null,
        withCredentials: false,
        metadata: {
          filename: file.name,
          filetype: file.type,
          token: token
        },
        onError: () => {
          reject();

          if (model.get('isDeleted')) {
            return;
          }

          Em.run(() => {
            model.set('state', 15);

            this.get('uiSnackbar').push(Em.i18n.t('connection_error_while_upload_file', { name: model.get('name') }), {
              button: true,
              buttonText: Em.i18n.t('to_open'),
              buttonAction: function() {
                this.get('router').transitionTo('import.image-list');
              }.bind(this)
            });
          });
        },
        onProgress: (bytesUploaded, bytesTotal) => {
          if (model.get('isDeleted')) {
            return;
          }
          Em.run(() => {
            let progress = parseInt((bytesUploaded / bytesTotal) * 100);

            if (progress > model.get('progress')) {
              this.set('uploadingProgress', progress);

              model.setProperties({
                progress,
                'sizeUploaded': bytesUploaded,
                'state': 10
              });
            }
          });
        },
        onSuccess: () => {
          Em.run(() => {
            model.rollbackAttributes();
            model.reload().then(_ => {
              this.get('uiSnackbar').push(Em.i18n.t('success_import_file'), {
                button: true,
                buttonText: Em.i18n.t('to_open'),
                buttonAction: function() {
                  this.get('router').transitionTo('import.image-list');
                }.bind(this)
              });

              model.set('tusInstance', null);

              resolve();
            }, _ => {
              resolve();
            });
          });
        }
      });

      model.set('tusInstance', upload);

      upload.start();

      this.set('tusUpload', upload);

    });
  })
});
