const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

function recordMiddleware(req, res, next) {
  let { url, ip } = req;
  fs.appendFileSync(
    path.resolve(__dirname, "./access.log"),
    `${url}  ${ip}\r\n`
  );
  // 调用next
  next();
}

// 使用中间件函数
app.use(recordMiddleware);

app.get("/home", (req, res) => {
  res.send("前台首页");
});

app.get("/login", (req, res) => {
  res.send("登录页");
});

app.all("*", (req, res) => {
  res.send("<h1>404 Not Found<h1>");
});

app.listen(3000, () => {
  console.log("服务已经启动...");
});
