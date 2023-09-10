// 导入 fs模块
const fs = require("fs");

// 异步创建文件夹
fs.mkdir("./../createfile", (err) => {
  if (err) {
    console.log("创建失败");
  } else {
    console.log("创建成功");
  }
});

// 递归创建
fs.mkdir('./../a/b/c', {recursive: true}, err => {
  if(err) {
    console.log('创建失败~');
    return;
  }
  console.log("创建成功");
})

// 读取文件夹
fs.readdir("./../file", (err, data) => {
  if (err) {
    console.log("读取失败~");
    return;
  }
  console.log("读取成功", data);  //  data =>  [ '同步写入.txt', '复制春晓1.txt', '座右铭.txt' ]
});

// 删除文件夹
fs.rmdir('./../createfile', err => {
  if(err) {
    console.log('删除失败');
    return;
  }
  console.log('删除成功');
})

// 递归删除 recursive=> 递归  不建议使用
fs.rmdir('./../a', {recursive: true}, err => {
  if(err){
    console.log(err, '删除失败');
    return;
  }
  console.log('删除成功~');
})

// 建议使用
fs.rm("./../a", { recursive: true }, (err) => {
  if (err) {
    console.log("删除失败~");
    return;
  }
  console.log("删除成功");
});
