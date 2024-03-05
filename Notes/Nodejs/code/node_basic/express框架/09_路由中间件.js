const express = require("express");

const app = express();

let checkCodeMiddleware = (req, res, next) => {
  if (req.query.code === "521") {
    next();
  } else {
    res.send("暗号错误");
  }
};

app.get("/home", (req, res) => {
  res.send("前台首页");
});

app.get("/login", checkCodeMiddleware, (req, res) => {
  res.send("登录页");
});

app.get("/setting", checkCodeMiddleware, (req, res) => {
  res.send("设置页面");
});

app.all("*", (req, res) => {
  res.send("<h1>404 Not Found<h1>");
});

app.listen(3000, () => {
  console.log("服务已经启动...");
});
