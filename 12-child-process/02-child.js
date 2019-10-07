#!/usr/bin/node

console.log('I am a child process id: %d',process.pid);

global.setInterval(function() {
  console.log('Time is %d',Date.now());
},2000);

global.setTimeout(function(){
  console.log('bye father');
  process.exit(1);
},16000);

process.on('message',function(msg){
  console.log('i get msg:%s',msg);
})


