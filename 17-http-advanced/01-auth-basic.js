#!/usr/bin/node

const http = require('http'),
      log = console.log;

http.createServer((req,res)=>{
  log('request headers:',req.headers);
  log('user-agent:',req.headers['user-agent']);
  log('host:',req.headers.host);

  switch(req.url) {
    case '/':
      sendNormalMsg(res);
      break;

    case '/admin':
      var auth = req.headers.authorization;
      var usr = getUserNamePwd(auth);
      if(usr.username === 'wangding' && user.password === '123'){
        showSecret(req,res);
      }else{
        showNormal(res);
      }
      sendSecretMsg(req, res);
      break;

    default:
      sendErrorMsg(res); 
                                          
  }

  var auth = req.headers.authorization;
  getUserNamePwd(auth);
  res.end('OK!');
}).listen(8080);

function getUserNamePwd(auth){
 log('authorization:',req.headers.authorization);
 if(typeof auth !== 'undefined'){
    auth = auth.split(' ');
    if(auth[0] === 'basic'){
      var buf = new Buffer(auth[1],'Base64');
      var usr = buf.toString('utf8').split(':');
      log('username:',user[0]);
      log('password',user[1]);
      log('username & password:',buf.toString('utf8'));
    }
  }
 return {
   username:user[0],
   password:user[1]
 }
}
