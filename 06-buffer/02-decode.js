#!/usr/bin/node

//buffer 解码
//命令行参数不正确时
if(process.argv.length !== 3) {
  console.error('命令行格式：cmd base64_string');
  process.exit(1);
}

const log = console.log;
var buf =new Buffer(process.argv[2],'base64'),
    info = buf.toString('utf8').split(':');

//还原信息不正确时
if(info.length !== 2) {
  console.error('信息有误！');
  process.exit(2);
}

log('usr:%s,pwd:%s',info[0],info[1])

