#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      qs = require('querystring'),
      items = [],
      log = console.log;


http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  var html = ''
  +'<!DOCTYPE html>'
  +'<html>'
  +'<head>'
    +'<title>TODO List</title>'
  +'<head>'
  +'<body>'
    +'<h1>TODO List</h1>'
      +'<ul>'+(function(item) {return '<li>' + item + '</li>';}).join('\n')'})
      +'<form method="GET" action="/">'
      +'<input type="text" name="item">'
      +'<input type = "submit" value="提交">'
    +'</form>'
  +'</body>'
  +'</html>';  

  if(req.url === '/'){
    // 200 ok
    res.writeHead(200,{'Content-Type':'text.html'});
    res.end(getHtml());

  }else{
    //404 not found
    var it = qs.parse(url.parse(req.url).query);
    if(typeof it !== 'undefined'){
      items.push(it);
    }
    req.end(getHtml());
  } 
}).listen(8080);

function getHtml(){
   return ''
  +'<!DOCTYPE html>'
  +'<html>'
  +'<head>'
    +'<title>TODO List</title>'
  +'<head>'
  +'<body>'
    +'<h1>TODO List</h1>'
      +'<ul>'
         + items.map(function(it){return '<li>'+ it +'</li>'})
      +'</ul>'
    +'<form method="GET" action="/">'
      +'<input type="text" name="item">'
      +'<input type = "submit" value="提交">'
    +'</form>'
  +'</body>'
  +'</html>';
}
