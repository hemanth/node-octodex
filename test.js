var octodex = require('./octodex.js');
var assert = require('assert');

describe('ocotdex test', function() {
  it('should return a octodex URL', function(done) {
      octodex.img(function(err, url) {
           setTimeout(function() {
                 assert.ok(!err && url.length > 1);
            }, 4000);
            done();
      });
  });
});
