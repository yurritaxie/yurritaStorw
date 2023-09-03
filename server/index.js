// 引入express
const express = require("express");
const db = require('./db/index')
// 创建服务器实例对象
const app = express();

app.get('/infor/:id/:name', (req,res) =>{
    console.log(req.params);
    res.send(req.params);
})

// 查询数据库信息
app.get('/search/data', (req, res) => {
    // 定义mysql查询语句
    const sql = 'select*from student';
    db.query(sql, (err, result) => {
        if(err) {
            return res.send({
                state: 1,
                message: err
            })
        }
        return res.send({
            state: 200,
            data: result
        })
    })
})

// 启动服务器, 3838为端口号，选择一个空闲的端口号
app.listen(3838, () => {
    console.log("Server running at http://127.0.0.1:3838")
});