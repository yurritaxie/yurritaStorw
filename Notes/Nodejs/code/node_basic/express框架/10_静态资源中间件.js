/**
 * 注意事项：
 * 1、index.html文件为默认打开资源
 * 2、如果静态资源与路由规则同时匹配，谁先匹配上就响应谁
 * 3、路由响应动态资源，静态资源中间件响应静态资源
 */
const express = require('express');

const app = express();

app.use(express.static(__dirname+'/public'));

app.get('/home',(req,res)=>{
    res.send('你好');
})

app.listen(3000, ()=>{
    console.log('服务已经启动...')
})