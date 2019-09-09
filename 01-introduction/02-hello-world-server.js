#!/usr/bin/node

const http = require('http');

//res.end（）是能传数据到客户端的，传的是字符串或者json格式，同时通知客户端响应消息已结束
http.createServer((req,res)=>{
      res.end('hello world');
}).listen(8080);
