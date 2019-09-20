#!/usr/bin/node

const Read = require('stream').Readable;

var r = new Read();

r.push('hello\n');
r.push('world\n');
r.push(null);

r.pipe(process.stdout);
