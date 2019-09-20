#!/usr/bin/node

const log = console.log;
//获取平台信息
log('CPU:',process.arch);
log('OS:',process.platform);
log('PID:',process.pid);
log('execPath:',process.execPath);
log('node.js ver:',process.version);
log('uid:',process.getuid());
log('gid:',process.getgid());
log('cwd: %s\n', process.cwd());

log('rss:', process.memoryUsage().rss);
log('heapTotal:', process.memoryUsage().heapTotal);
log('heapUsed:', process.memoryUsage().heapUsed);
log('external: %s\n', process.memoryUsage().external);

log('env:', process.env);
log('host name:', process.env.HOSTNAME);

/*process.stdin.on('data',function(data){
  log(data);
});*/
