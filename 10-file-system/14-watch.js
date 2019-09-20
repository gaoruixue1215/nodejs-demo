#!/usr/bin/node

const fs = require('fs'),
      dst = process.argv[2];
//监控目录
fs.watch(dst,function(evt,file){
  console.log("%s happened with file:%s",evt,file);
})
