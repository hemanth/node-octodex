var request = require('request');
var cheerio = require('cheerio');
var url = 'http://octodex.github.com';

var img = function img(cb){ 
  request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var imgs = $('a.preview-image > img');
      cb(null,url + imgs[Math.floor(Math.random() * (imgs.length))].data.src);
    } else {
      cb(error,response.statusCode);
    }
  });
}

module.exports = {img: img};
