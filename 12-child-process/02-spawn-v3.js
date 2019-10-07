#!/usr/bin/node

const http = require('http'),
      cp = require('child_process');

//res.end（）是能传数据到客户端的，传的是字符串或者json格式，同时通知客户端响应消息已结束
http.createServer((req,res)=>{
  //req 是http.IncomingMessage类，主要用于获取请求信息
  //res 是 http.ServerResponse类，用于响应客户端请求
  //
  //
  var child = cp.spawn('./02-child.js',[]);
  child.stdout.pipe(res);
  }).listen(8080);
