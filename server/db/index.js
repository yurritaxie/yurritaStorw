// 引入mysql
const mysql = require('mysql');

// 建立连接池
const db = mysql.createPool({
    host: "127.0.0.1", //数据库的IP地址
    user: "root",
    password: "LLysc1s1kr",
    database: "yurrita", //指定要操作那个数据库
})

// // 检测数据库是否连接成功
// db.query('select 1', (err, results) => {
//     if (err) return console.log(err);
//     console.log(results);
// })

module.exports = db;