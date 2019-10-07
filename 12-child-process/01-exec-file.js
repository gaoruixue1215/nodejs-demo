#!/usr/bin/node

const cp = require('child_process');

console.log('I am father process. PID:', process.pid);
console.log('cat 01-exec-file.js\n');

cp.execFile('mkdir', ['folder'], (err, stdout) => {
    if(err) console.error(err);

      console.log(stdout);

});
