#!/usr/bin/node

const fs = require('fs'),
      com1 = process.argv[2],
      com2 = process.argv[3];

if(com1 === 'list' && typeof(com2) === 'undefined'){
  var dir = fs.readdirSync(__dirname);
  var arr = [];
  for(var i = 0;i<dir.length;i++){
    if(fs.statSync(dir[i]).isFile()){
      var files = {
        fileName:dir[i],
        fileSize:fs.statSync(dir[i]).size
      };
      arr[i] = files;
    };
  };
  arr = arr.filter(function(item){
    return item != ''
  });
  console.log(arr);

}else if(com1 === 'mkdir' && com2 === 'folder'){
  fs.mkdirSync(com2);

}else{
  console.error('命令行参数错误');
  process.exit(1);
};


