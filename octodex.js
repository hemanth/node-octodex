/*
 * octodex
 * https://github.com/hemanth/octodex
 *
 * Copyright (c) 2013 Hemanth.HM
 * Licensed under the MIT license.
 */

var jsdom = require("jsdom");

exports.octodex = function() {
  jsdom.env(
  "http://octodex.github.com/",
  ["http://code.jquery.com/jquery.js"],
  function (errors, window) {
    $ = window.$;
    imgs = [];
    $("a.preview-image > img").each(function() {
        imgs.push($(this).attr('data-src'));
    });
    console.log(imgs[Math.floor(Math.random()*imgs.length)]);
  }
);  
};

