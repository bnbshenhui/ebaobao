var escapeHtml = require('escape-html');
var express = require('express');
var fs = require('fs');
var marked = require('marked');

var app = module.exports = express();

  app.engine('md', function(path, options, fn){
    fs.readFile(path, 'utf8', function(err, str){
      if(err) return fn(err);
      var html = marked.parse(str).replace(/\{[^}]+)\}/g,function(_, name){
        return escapeHtml(options[name] || '');
      });
    fn(null, html);
    })
  })

app.set('views', __dirname + '/views');

app.set('view engine', 'md')

app.get('/', function(req, res){
  res.render('index', {title : 'Markdown example'});
});

app.get('/fail', function(req, res){
  res.render('missing', {title : 'Markdown Example'})
});

if(!module.parent){
  app.listen(3000);
  console.log("Express start at 3000");
}
