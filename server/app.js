// 引入express
const express = require("express");
const db = require('./db/index')
// 创建服务器实例对象
const app = express();




// 启动服务器, 3838为端口号，选择一个空闲的端口号
app.listen(8081, () => {
    console.log("Server running at http://127.0.0.1:8081")
});