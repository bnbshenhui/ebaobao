var express = require('express');
var app = express()

app.get('/',function (req, res){
  res.send('Hello World!!!');
});
console.log("fuck");
app.listen(process.env.PORT || 5050);
