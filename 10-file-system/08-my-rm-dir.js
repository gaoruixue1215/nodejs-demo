#!/usr/bin/node

const fs = require('fs'),
      join = require('path').join,
      src  = process.argv[2];

//判断命令行参数是否存在
if(typeof(src) === 'undefined'){
  console.error('请指定要删除的');
}
    
