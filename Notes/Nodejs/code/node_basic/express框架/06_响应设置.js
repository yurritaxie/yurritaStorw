const express = require("express");

const app = express();

app.get("/other", (req, res) => {
    // 原生响应
    // res.statusCode = 404;
    // res.statusMessage = 'love';
    // res.setHeader('xxx','yyy');
    // res.write('hello http');
    // res.end('response setting')
    // express 响应
    // res.status(503);
    // res.set('aaa','bbb');
    // res.send('你好，express') // 无需设置字符集，express自动识别
    res.status(500).set('abc','def').send('这些都是OK的') // 可以进行链式设置响应体
});

app.listen(3000, () => {
  console.log("服务已启动...");
});
