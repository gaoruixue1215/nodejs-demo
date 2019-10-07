#!/usr/bin/node

const fs = require('fs'),
      com  = process.argv[2],
      par = process.argv[3];
      
var list = __dirname;

if(com  === 'list'){
  var dir = fs.readdirSync(list);
  var cont = [];
  for(var i = 0;i<dir.length;i++){
    if(fs.statSync(dir[i]).isFile()){
      var file = {fileName:dir[i],fileSize:fs.statSync(dir[i]).size};
      cont[i] = file;
    }
  }
  cont = cont.filter(function(item){
    return item != ''
  });
  console.log(cont);

}else if(com === 'mkdir' && par !== null){
  fs.mkdirSync(par);
}else{
  console.error('命令行参数错误');
  process.exit(1);
}



