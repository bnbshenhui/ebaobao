var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('fuck Hello World');
});

/* istanbul ignore next */

app.listen(process.env.PORT || 5050);

