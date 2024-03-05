/**
 * 获取本机的ip=》cmd => ipconfig
 */

const express = require('express');

const app = express();

app.get('/request', (req, res)=>{
    //原生操作
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    console.log(req.headers);
    // express操作
    console.log(req.path);//获取请求地址
    console.log(req.query);//获取请求参数
    console.log(req.ip);//获取ip
    console.log(req.get('host'))//获取主机
    res.end('get params')
    // 获取请求头
})

app.listen(3000,()=>{
    console.log('服务已经启动，端口号为3000...')
})