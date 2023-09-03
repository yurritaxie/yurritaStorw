// 1. 引入fs模块
const { log } = require('console');
const fs = require('fs');

// 2. 异步读取
fs.readFile('./../file/春晓.txt',(err,data)=>{
    if(err){
        console.log('读取失败');
    }
    // console.log('读取成功', data);
    console.log('读取成功', data.toString());
})

// 3. 同步读取
let data = fs.readFileSync('./../file/春晓.txt')
// console.log(data,'同步读取');
console.log(data.toString(),'同步读取');

// 4. 文件的流式读取
const rs = fs.createReadStream('./../file/春晓.txt')
rs.on('data', chunk=>{
    // console.log(chunk);  
    console.log(chunk.length); // 如果字符长度过长，没次最大读取 65536字节 =》 64KB
});
// 读取完毕之后 会触发end事件
rs.on('end',()=>{
    console.log('读取完成');
})