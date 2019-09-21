#!/usr/bin/node

const log = console.log;
//获取平台信息
log('CPU:',process.arch);//cpu架构信息
log('OS:',process.platform);//操作系统版本信息
log('PID:',process.pid);//进程ID
log('execPath:',process.execPath);//node.js可执行文件的绝对路径信息
log('node.js ver:',process.version);//版本信息
log('uid:',process.getuid());//用户ID
log('gid:',process.getgid());//当前登录用户所属组ID信息
log('cwd: %s\n', process.cwd());//当前脚本所在路径信息

//返回node.js进程的内存使用情况
log('rss:', process.memoryUsage().rss);
log('heapTotal:', process.memoryUsage().heapTotal);
log('heapUsed:', process.memoryUsage().heapUsed);
log('external: %s\n', process.memoryUsage().external);

//打印环境变量
log('env:', process.env);
log('host name:', process.env.HOSTNAME);

/*process.stdin.on('data',function(data){
  log(data);
});*/
