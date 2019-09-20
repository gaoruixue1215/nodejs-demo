#!/usr/bin/node

const log = console.log;

var buf1 = new Buffer(256);
//初始化第一个字节为零，控制台打印 buf1 的长度和内容
buf1[0] = 0;
log('buf1 length:',buf1.length);
log('buf1:',buf1);

//循环初始化buffer中的每个字节,每个字节比上个字节大1
for(var i = 0;i<buf1.length;i++){
    buf1[i]=i;
}
log('buf1:',buf1);

var buf2 = buf1.slice(246,256);//切片操作
log('buf2:',buf2);
log('buf2 length:',buf2.length);


buf2.fill(0);//填充操作
log('buf2:',buf2);
log('buf2:',buf2.toJSON());//buffer数据转化为JSON数据
//buf2: { type: 'Buffer', data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
log('buf2:',JSON.stringify(buf2));
//buf2: {"type":"Buffer","data":[0,0,0,0,0,0,0,0,0,0]}

//数组初始化buf3
var arr = ['a',0xba,0xdf,0x00,255,10];
var buf3 = new Buffer(arr);
log('buf3:',buf3,buf3.length);

//字符串初始化buf4
var buf4 = new Buffer('hello world!');
log('buf4:',buf4,buf4.length);

//将buf4的内容复制到buf3,数据复制
buf4.copy(buf3,0,0,buf3.length);
log('buf3:',buf3,buf3.length);

//utf8 编码
var str='你好-wangding';
var buf5 = new Buffer(str,'utf8');
log('buf5 length:',buf5.length);
log('string length:',str.length);

