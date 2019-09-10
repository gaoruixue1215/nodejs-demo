#!/usr/bin/node

const log = console.log;

var buf1 = new Buffer(256);

buf1[0] = 0x11;
log('buf1 length:',buf1.length);
log('buf1:',buf1);


var buf2 = buf1.slice(250,256);//切线操作
log('buf2:',buf2);

for(var i = 0;i<buf1.length;i++){
    buf1[i]=i;

}
log('buf1:',buf1);

buf1.fill(0,0,256);

var buf3 = buf1.slice(250,256);
log('buf3:',buf3);

log('buf3:',buf3.toJSON());
log('buf3:',JSON.stringify(buf3));

var arr = ['a',0xba,0xdf,0x00,255,10];
var buf4 = new Buffer(arr);
log('buf4:',buf4);

var buf5 = new Buffer('hello world!');
log('buf5:',buf5);

buf5.copy(buf4,0,0,buf4.length);
log('buf4:',buf4);

var str='你好-wangding';
var buf6 = new Buffer(str);
log('buf6 length:',buf6.length);
log('string length:',str.length);

