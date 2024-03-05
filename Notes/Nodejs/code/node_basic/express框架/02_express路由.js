//一个路由的组成有请求方法、路径和回调函数组成
// 导入express
const express = require("express");
// 创建应用对象
const app = express();

// 创建get请求
app.get("/home", (req, res) => {
  res.end("I am homePage");
});

// 创建post请求
app.post("/login", (req, res) => {
    res.end('I am login')
});

// 不限制请求方法
app.all("/login", (req, res) => {
    res.end('I am login')
});

// 不限制请求方法,通常用于托底路由规则
app.all("*", (req, res) => {
    res.end('404 Not Found')
});

app.listen(3000,()=>{
    console.log('服务已经启动，端口3000正在监听中...')
})
