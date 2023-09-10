// 导入fs模块
const fs = require('fs');

// 相对路径   ./座右铭.txt  当前目录下的座右铭   => 等效于座右铭.txt  
// ../当前目录的上一级目录中的座右铭.txt
// fs.writeFileSync('座右铭.txt', 'love');
// fs.writeFileSync('座右铭1.txt', 'love');
// fs.writeFileSync('../座右铭1.txt', 'love');

// 绝对路径  ~

// __dirname 与 require 类似， 都是Node.js环境中的‘全局’变量，保存着当前所在路径的绝对路径

