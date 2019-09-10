#!/usr/bin/node


const log = console.log;
var buf =new Buffer(process.argv[2],'base64'),
        info = buf.toString('utf8').split(':');

log('usr:%s,pwd:%s',info[0],info[1])

