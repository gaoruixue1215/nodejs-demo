#!/usr/bin/node

/* var n = process.argv[2];
 process.exit(n);*/


const log = console.log,
      err = console.error,
      arg = process.argv[2];

//退出码数据合法性检验
if(typeof(arg) === 'undefined' || isNaN(Number(arg))) {
  err('命令行参数不正确');
  process.exit(1);
} else {
  log('退出码：', arg);
  process.exit(arg);
}
