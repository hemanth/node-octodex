# octodex

Get random octodex img URLs.

## Getting Started
Install the module with: `npm install octodex`

```javascript
var cat = require('octodex');

cat.img(function(err,url){
    if(!err){
        console.log(url); 
       // This will give a random img url.
    }
});
```

## License
Copyright (c) 2013 Hemanth.HM  
Licensed under the MIT license.
