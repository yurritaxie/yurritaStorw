/**
 * 需求
 *   复制[ file ] 文件下的 [春晓.txt]
 */
// 引入fs模块
const fs = require('fs');
const process = require('process'); // process也是nodejs里面的一个模块，可以获取nodejs运行时占用的内存

// 写法一
let copyData = fs.readFileSync('./../file/春晓.txt')
fs.writeFile('./../file/复制春晓.txt',copyData,err=>{
    if (err) {
        console.log('复制失败');
    }
})
// console.log(process.memoryUsage()); // 打印出来是一个对象 其中rss是内存大小，单位是字节


// 写法二  这种方式更好，占用资源小
// let rs = fs.createReadStream('./../file/复制春晓.txt');
// let ws = fs.createWriteStream('./../file/复制春晓1.txt')
// rs.on('data', chunk =>{
//     ws.write(chunk);
// })
//console.log(process.memoryUsage());

// 写法三 
const rs  = fs.ReadStream();
rs.pipe(ws);  // pipe 管道
