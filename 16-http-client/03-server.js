#!/usr/bin/node

const http = require('http'),
      log = console.log;

//res.end（）是能传数据到客户端的，传的是字符串或者json格式，同时通知客户端响应消息已结束
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP://${req.httpVersion}`);
  log(req.headers);
  log('');
    res.end('hello world');
}).listen(8080);
