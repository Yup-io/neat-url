# neat-url

Cleanup URLs by removing tracking parameters.

## Example

```
var neatUrl = require('neat-url');
const url = neatUrl({
  url: "https://www.example.com/bens-tagging?utm_source=mysite.com&utm_medium=referral&utm_campaign=url+tracking+post#Echobox=1568564590",
  includeHash: true
})
console.log("url: " + url);
// url: https://www.example.com/bens-tagging
```

## Installation

```
npm install --save neat-url
```

## License

Copyright © 2019

Licensed under the [MIT license](LICENSE).
