const express = require("express");

const app = express();

app.use((req, res, next) => {
  //获取请求头中的referer
  let referer = req.get("referer");
  console.log(referer);
  if (referer) {
    let { hostname } = new URL(referer);
    if (hostname !== "127.0.0.1") {
      res.status(404).send("<h1>404 Not Found</h1>");
      return;
    }
  }
  next();
});

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("服务已经启动...");
});
