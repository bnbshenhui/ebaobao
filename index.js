var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('fuck Hello World');
});

/* istanbul ignore next */

app.listen(3000);
console.log('Express started on port 3000');

