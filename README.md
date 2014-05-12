# octodex

Get random octodex img URLs.

## Getting Started
Install the module with: `npm install octodex`

```javascript
var cat = require('octodex');

cat(function(err,url){
    if(!err){
        console.log(url); 
       // This will give a random img url.
    }
});
```

You can also pass the second parameter indicating to the module to do in memory cache of the parsed content.
Using it, he will perform the parce only once. making the other invocations faster.

```javascript
var cat = require('octodex');

cat(function(err,url){
    if(!err){
        console.log(url); 
       // This will give a random img url.
    }
}, true);
```

## License
Copyright (c) 2013 Hemanth.HM  
Licensed under the MIT license.
