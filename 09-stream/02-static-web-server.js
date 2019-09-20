#!/usr/bin/node

const http = require('http'),
      fs = require('fs');

//res.end（）是能传数据到客户端的，传的是字符串或者json格式，同时通知客户端响应消息已结束
http.createServer((req,res)=>{
  if(req.url === '/favicon.ico') return;
  var fileName = __dirname+req.url;
  console.log(fileName);
  res.end(fs.readFileSync(fileName));
}).listen(8080);

console.log(process.pid);
