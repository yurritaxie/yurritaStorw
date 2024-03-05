// 需要使用插件body-parser
const express = require("express");
const bodyParser = require("body-parser");
// 解析JSON格式的请求体的中间件
// var jsonParser = bodyParser.json()

//解析querystring格式请求体的中间件
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/login", urlencodedParser, (req, res) => {
  console.log(req.body);
  res.send("登录成功");
});

app.listen(3000, () => {
  console.log("服务器启动成功");
});
