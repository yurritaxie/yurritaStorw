# 一、NodeJs入门

## 1、命令行常用操作

|     说明     |   操作   |
| :----------: | :------: |
|   切换盘符   | C:    D: |
| 切换工作目录 |    cd    |
| 查看目录文件 |   dir    |
| 查看所有文件 | dir  /s  |

## 2、nodejs的注意事项

```js
//BOM
console.log(window) //抛出错误BOM的api不能再nodejs中使用
console.log(history);
console.log(navigator);
console.log(location);
//DOM
console.log(document); //抛出错误DOM的api不能再nodejs中使用
//AJAX
let xhr = new XMLHttpRequest(); //抛出错误DOM的api不能再nodejs中使用
console.log('i love you');
setTimeout(()=>{
    console.log('定时器可以在node中进行使用');
},1000)

// global nodejs中的顶级对象,也可以使用globalThis访问顶级对象
console.log(global);
console.log(globalThis === global); //es2020规范中引入的
```

## 3、Buffer（缓冲器）

**① 概 念**

+ Buffer是一个类似与数组的对象，操作方法也和数组类似，用于表示固定长度的字节序列

+ Buffer本质是一段内存空间，专门用来处理二进制数据

+ 使用Buffer不需要引入模块，直接使用即可
+ 在buffer中存储的都是二进制数据，但是在显示时，都是以16进制显示的

**② 特 点**

+ Buffer大小固定且无法调整
+ Buffer性能较好，可以直接对计算机内存进行操作=》基于这一点buffer一旦创建大小不能再修改
+ 每个元素的大小为1字节（byte）----》8bit = 1byte(字节) ----》1024byte = 1kb ----》1024kb = 1mb ----》1024mb = 1gb ----》1024gb = 1tb   ---->一个汉字占用三个字节

**③ 使 用**

```js
// alloc  创建一个指定大小的buffer，参数为这个buffer所占用的内存大小，单位是byte
//这个分配空间，而且会清除原先的数据
let buf = Buffer.alloc(10)
// console.log(buf,'buf');
//allocUnsafe  创建一个指定大小的buffer，但是buffer中可能含有敏感数据，这个只分配空间，但是不会清除原先的数据
let buf1 = Buffer.allocUnsafe(10)
console.log(buf1,'buf1');
//from   将一个字符串转换为buffer;
let str = 'hello nodejs'
let buf3 = Buffer.from(str)
console.log(buf3,'buf3');
//读取buf里面的数据
console.log(buf3[0],'读取');
//读取buf里面的数据为2进制数
console.log(buf3[0].toString(2),'2进制');
//buffer.toString()  可以将缓冲区的数据转化为字符串
console.log(buf3.toString());
//溢出
let buf4 = Buffer.from('yurrita');
buf4[0] = 361; //二进制最大的数位255  361转化为二进制数为0001 0110 1001
console.log(buf4[0]); //105(十进制) =》 0110 1001(二进制)  舍弃了高位的数字
// 中文
let buf5 = Buffer.from('你好');
console.log(buf5, 'utf-8中的中文是占用3个byte');
```

## 4、fs模块

 **① 概 念**

+ 全称：**file system** =》文件系统
+ fs模块可以实现与硬盘的交互，例如文件的创建、删除、重命名、移动，还有文件的写入、读取，以及文件夹的相关操作

**②文件写入**

|           方法            |   说明   |
| :-----------------------: | :------: |
|         writeFile         | 异步写入 |
|       writeFileSync       | 同步写入 |
| appendFile/appendFileSync | 追加写入 |
|     createWriteStream     | 流式写入 |

### writeFile 异步写入

语法： <span style="color: orange">fs.writeFile(file,data,[...option],callback)</span>

参数说明：

+ file 文件名
+ data 待写入的数据
+ option 选项设置 <span style="color: orange">（可选）</span>
+ callback 写入回调

返回值 ：  <span style="color: orange">undefined</span>

代码示例：

```js
//异步写入
fs.writeFile('./../file/座右铭.txt','不要指望一口气吃成一个大胖子',err=>{
    //err 写入失败：是一个错误对象 写入成功：null
    // js线程 和 i/o线程（写入磁盘） 异步进行
    if (err) {
        console.log('写入失败');
        return;
    }
    console.log('写入成功');
})

```

### writeFileSync 同步写入

语法： <span style="color: orange">fs.writeFile(file,data,[...option],callback)</span>

参数说明：

+ file 文件名
+ data 待写入的数据
+ option 选项设置 <span style="color: orange">（可选）</span>

代码示例：

```js
// 同步写入
fs.writeFileSync('./../file/同步写入.txt','同步写入')
```

### appendFile 异步追加写入

语法： <span style="color: orange">fs.appendFile(file,data,[...option],callback)</span>

参数说明：

+ file 追加文件名
+ data 待写入的数据
+ option 选项设置 <span style="color: orange">（可选）</span>
+ callback 写入回调

返回值 ：  <span style="color: orange">undefined</span>

代码示例：

```js
//异步追加写入
fs.appendFile('./../file/座右铭.txt','慢慢学，每天进步一点', err=>{
    if(err){
        console.log('追加写入失败');
    }
    console.log('追加写入成功');
})
// writeFile()实现文件的追加写入
fs.writeFile('./../file/座右铭.txt', 'writeFile()实现文件的追加写入',{flag:'a'},err=>{
    if(err){
        console.log('追加写入失败');
    }
    console.log('追加写入成功');
})
```

### appendFileSync 同步追加写入

语法： <span style="color: orange">fs.appendFileSync(file,data,[...option],callback)</span>

参数说明：

+ file 追加文件名
+ data 待写入的数据
+ option 选项设置 <span style="color: orange">（可选）</span>

代码示例：

```js
// 同步追加写入 使用\r\n换行
fs.appendFileSync('./../file/座右铭.txt','\r\n2023.7.13')
```

### createWriteStream 流式写入

语法：<span style="color: orange">fs.createWriteStream(path,[....options]) </span>

参数说明：

+ path 文件路径
+ options 选项配置 <span style="color: orange">（可选）</span>

返回值：<span style="color: orange">Object</span>

代码示例：

```js
// createWriteStream 流式写入
let ws = fs.createWriteStream('./../file/春晓.txt');
ws.write('春眠不觉晓\r\n');
ws.write('处处闻啼鸟\r\n');
ws.write('夜来风雨声\r\n');
ws.write('花落知多少\r\n');
ws.close();
```

<span style="color: red">**使用背景：**</span>程序打开一个文件是需要消耗资源的，流式写入可以减少打开关闭文件的次数。流式写入方式适用于大文件写入或者频繁写入的场景，writeFile适合于写入频率较低的场景

### 写入文件的场景

当需要要持久话保存数据的时候，应该想到文件写入

+ 下载文件
+ 安装软件
+ 保存程序日志，如Git
+ 编辑器保存文件

**③文件读取**

文件读取顾名思义，就是通过程序从文件中取出其中的数据，我们可以使用如下方法

|       方法       |   说明   |
| :--------------: | :------: |
|     readFile     | 异步读取 |
|   readFileSync   | 同步读取 |
| createReadStream | 流式读取 |

### readFile 异步读取

语法：<span style="color: orange">fs.readFile (path,[....options]，callback) </span>

参数说明：

+ path 文件路径
+ options 选项配置 <span style="color: orange">（可选）</span>
+ callback 回调函数

返回值：<span style="color: orange">undefined</span>

代码示例：

```js
fs.readFile('./../file/春晓.txt',(err,data)=>{
    if(err){
        console.log('读取失败');
    }
    // console.log('读取成功', data);
    console.log('读取成功', data.toString());
})
```

### readFileSync 同步读取

语法：<span style="color: orange">fs.readFileSync (path,[....options]) </span>

参数说明：

+ path 文件路径
+ options 选项配置 <span style="color: orange">（可选）</span>

代码示例：

```js
let data = fs.readFileSync('./../file/春晓.txt')
// console.log(data,'同步读取');
console.log(data.toString(),'同步读取');
```

### createReadStream 流式读取

语法：<span style="color: orange">fs.createReadStream (path) </span>

参数说明：

+ path 文件路径

代码示例：

```js
const rs = fs.createReadStream('./../file/春晓.txt')
rs.on('data', chunk=>{
    // console.log(chunk);  
    console.log(chunk.length); // 如果字符长度过长，没次最大读取 65536字节 =》 64KB
});
// 读取完毕之后 会触发end事件
rs.on('end',()=>{
    console.log('读取完成');
})
```

### 文件重命名和移动

语法：<span style="color: orange">fs.rename(path1,path2,callback)</span>

参数说明：

+ path1 需要修改的文件名地址
+ path2 '修改之后文件的地址名'
+ callback 回调函数

代码示例：

```js
// 文件重命名
const fs = require('fs');
fs.rename('./../file/春晓.txt','./../file/春天来了.txt',err=>{
    if(err){
        console.log('重命名失败')
    }
    console.log('重命名成功');
})
// 文件的移动
fs.rename('./../file/春天来了.txt','./春天来了.txt',err=>{
    if(err){
        console.log('重命名失败')
    }
    console.log('重命名成功');
})
renameSync //同步操作
```

### 文件删除

语法：①<span style="color: orange">fs.unlink(path1,callback)</span>   同步的方法是 **unlinkSync**

​           ②<span style="color: orange">fs.rm(path1,callback)</span>   同步的方法是 **rmSync**

参数说明：

+ path  删除的文件地址
+ callback回调函数

代码示例：

```js
// unlink进行删除 unlinkSync
let fs  = require('fs');
fs.unlink('./春天来了.txt', err=>{
    if(err){
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
})

// 使用rm进行删除 node 14.4新引入的方法 rmSync
fs.rm('./复制春晓.txt',err=>{
    if(err){
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
})
```

### fs模块进行文件夹操作

借助Node.js的能力，我们可以对文件夹进行创建、读取、删除等一系列操作

| 方法                | 说明       |
| ------------------- | ---------- |
| mkdir/mkdirSync     | 创建文件夹 |
| readdir/readdirSync | 读取文件夹 |
| rmdir/rmdirSync     | 删除文件夹 |

#### 创建文件夹

语法： ①<span style="color: orange">fs.mkdir(path1,options,callback)</span>   

​              ②<span style="color: orange">fs.mkdirSync(path1,options,callback)</span> 

参数说明：

+ path  删除的文件地址
+ options 选项配置（可选）
+ callback回调函数