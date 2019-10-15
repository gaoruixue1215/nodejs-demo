#!/usr/bin/node

const http = require('http'),
      log = console.log;

http.createServer((req,res)=>{
  log('request headers:',req.headers);
  log('authorization:',req.headers.authorization);

  var auth = req.headers.authorization;
  if(typeof auth !== 'undefined'){
    auth = auth.split(' ');
    if(auth[0] === 'basic'){
      var buf = new Buffer(auth[1],'Base64');
      log('username & password:',buf.toString('utf8'));
    }
  }
  log('user-agent:',req.headers['user-agent']);
  log('host:',req.headers.host);
  res.end('OK!');
}).listen(8080);
