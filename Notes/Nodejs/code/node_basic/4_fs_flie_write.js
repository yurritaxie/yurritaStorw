/**
 * 需求：
 * 新建一个文件，座右铭.txt, 
 * 写入内容： 不要指望一口气吃成一个大胖子
 */
// 1. 导入fs模块
const fs = require('fs'); //require是一个全局函数，用来导入模块

// 异步写入 
fs.writeFile('./../file/座右铭.txt','不要指望一口气吃成一个大胖子',err=>{
    //err 写入失败：是一个错误对象 写入成功：null
    // js线程 和 i/o线程（写入磁盘） 异步进行
    if (err) {
        console.log('写入失败');
        return;
    }
    console.log('写入成功');
})

// 同步写入
fs.writeFileSync('./../file/同步写入.txt','同步写入')
console.log(1+1);

// 异步追加写入  调用fs.appendFile()
fs.appendFile('./../file/座右铭.txt','\r\n慢慢学，每天进步一点', err=>{
    if(err){
        console.log('追加写入失败');
    }
    console.log('追加写入成功');
})

// 同步追加写入 使用\r\n换行
fs.appendFileSync('./../file/座右铭.txt','\r\n2023.7.13')

// writeFile()实现文件的追加写入
fs.writeFile('./../file/座右铭.txt', 'writeFile()实现文件的追加写入',{flag:'a'},err=>{
    if(err){
        console.log('追加写入失败');
    }
    console.log('追加写入成功');
})

// createWriteStream 流式写入
let ws = fs.createWriteStream('./../file/春晓.txt');
ws.write('春眠不觉晓\r\n');
ws.write('处处闻啼鸟\r\n');
ws.write('夜来风雨声\r\n');
ws.write('花落知多少\r\n');
ws.close(); //关闭通道
// ws.end();

//使用背景：程序打开一个文件是需要消耗资源的，流式写入可以减少打开关闭文件的次数。流式写入方式适用于大文件写入或者频繁写入的场景，writeFile适合于写入频率较低的场景
