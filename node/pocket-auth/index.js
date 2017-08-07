const qs = require('querystring')
const request = require('request')
const opn = require('opn')


let options = {
  headers: {

  }

}

request('getpocket.com/v3/oauth/request', (req(), res) => {

  req.write(qs.stringify({
    consumer_key: '51026-6da61e0b0e81e827f4bfff10',
    redirect_uri: 'ya.ru'
  }))

})