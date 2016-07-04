var request = require('request');
var Telegram = require('telegram-bot');

process.env.TELEGRAM_BOT_TOKEN = '107126919:AAGaH5Qa6U5dXNLI1wbYRT08VLxblCVlJ0E';

var tg = new Telegram(process.env.TELEGRAM_BOT_TOKEN);

var post = 0;

tg.on('message', function (msg) {
	if (msg.text != '/cute') return;


	var options = {
		type: "GET",
		url: "http://api.tumblr.com/v2/blog/cuteanimals.tumblr.com/posts?",
		dataType: "jsonp",
		data: {
			api_key: "fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4"
		}
	};


	function callback(error, response, body) {
		if (!error && response.statusCode == 200) {

			if (post >= 19) {
				post = 0;
			}

			post++;

			var data = JSON.parse(body);

			console.log(data.response.posts.length);

			console.log(data.response.posts[post].photos[0].original_size.url);


			tg.sendMessage({
				text: data.response.posts[post].photos[0].original_size.url,
				chat_id: msg.chat.id
			});

		}
	}

	request(options, callback);

	console.log(msg.text);
});

tg.start();


