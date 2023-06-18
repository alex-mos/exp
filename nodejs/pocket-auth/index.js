const qs = require('querystring')
const request = require('request')
// const opn = require('opn')


let options = {
    url: 'https://getpocket.com/v3/oauth/request',
    headers: {
        'method': 'POST',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Accept': 'application/json'
    },
    body: qs.stringify({
        consumer_key: '51026-6da61e0b0e81e827f4bfff10',
        redirect_uri: 'https://ya.ru'
    })
}

request(options, (err, res, body) => {
    console.log('error:', err);
    console.log('statusCode:', res && res.statusCode)
    console.log(res);
    console.log('body:', body);
})