#!/usr/bin/node

const log = console.log;

var user = {
    'name':'郜瑞雪',
    'qq':'1171331232',
    'age':20
};

/*log('name:%s\t age:%d',user.name,user.age);
log('gaoruixue Info:',user);

log('name:',user.name);
log('age is ${user.age}');*/

// 三种占位符
log('name: %s', user.name);   // 字符串类型
log('age: %d', user.age);     // 整数类型
log('JSON: %j', user);        // 对象类型

log('qq: %s', user.qq);       // 输出方式一：占位符输出
log('qq:', user.qq);          // 输出方式二：逗号间隔，多变量输出
log('qq: ' + user.qq);        // 输出方式三：拼接字符串输出
log(`qq: ${user.qq}`);        // 输出方式四：模板字符串输出

console.error('Error! something wrong!');

