var request = require('request')

var options = {
  type: 'GET',
  url: 'http://api.tumblr.com/v2/blog/cuteanimals.tumblr.com/posts?',
  dataType: 'jsonp',
  data: {
    api_key: 'fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4',
  },
}

var post = 0

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    post++

    if (post >= 19) {
      post = 0
    }

    const data = JSON.parse(body)

    console.log(data.response.posts.length)

    for (i in data.response.posts[post].photos) {
      console.log(data.response.posts[post].photos[i].original_size.url)
    }
  }
}

request(options, callback)


/*

 $.ajax({
 type: "GET",
 url: "http://api.tumblr.com/v2/blog/foodgif.tumblr.com/posts?",
 dataType: "jsonp",
 data: {
 api_key: "fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4"
 }
 }).done(function (data) {
 $.each(data.response.posts, function () {
 var _photos = this.photos

 $.each(_photos, function () {
 console.log(this.original_size.url)
 })
 })
 })

 */
