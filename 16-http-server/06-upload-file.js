#!/usr/bin/node

const http = require('http'),
      qs = require('querystring'),
      fs = require('fs'),
      log = console.log;


http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  var fl = "";
  req.setEncoding('binary');

  req.on('data',(data)=>{
    fl+=data;
  })
  req.on('end',()=>{
    //parse fl
    //get filename
   var filename =  qs.parse(fl.split('\r\n')[1].split(";")[2].trim())['filename'];
   log(filename);
   
   filename = filename.slice(1,filename.length-1);
    //get file data
    log(fl.split('\r\n')[4]);
    var filedata = fl.split('\r\n')[4];
    log(filedata);
    fs.writeFileSync(filename,filedata,{'encoding':'binary'})
  })


  res.end('OK');
}).listen(8080);
