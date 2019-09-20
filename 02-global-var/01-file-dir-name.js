#!/usr/bin/node

console.log('dir name:',__dirname);
console.log('file name:',__filename);

//opterate data file
//方案一：没有考虑跨平台
var file = __dirname + '/views/view.html';
console.log('file name:',file);

//windows data file
file = __dirname + '\\views\\view.html';
console.log('file name in windows:',file);

//方案二：不好，代码复杂，平台考虑不全面
/*switch(process.platform){
  case 'linux':
      file = __dirname +'/views/view.html';
      break;
   case 'win32':
      file = __dirname + '\\views\\view.html';
      break;
  default:
    file = 'something wrong'
}*/

//方案三：最佳
const path = require('path');

file = path.join(__dirname, 'data', 'db.xml');//拼接路径
console.log(file);

