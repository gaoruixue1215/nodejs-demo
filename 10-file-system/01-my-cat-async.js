#!/usr/bin/node

const fs = require('fs'),//引入文件模块
      file = process.argv[2] || __filename;//要求支持命令行参数，包括：要打印的文件名，没有命令行参数时，默认打印脚本本身内容

fs.readFile(file,function(err,data){//回调异步
  if(err){
    console.error(err.message);//打印错误信息
    process.exit(1);//退出码不能为0
  }else{
    console.log(data.toString('utf8'));//当文件读取成功时，输出读取内容，data是buffer类型，二进制，转化为utf-8编码输出
  }
});
