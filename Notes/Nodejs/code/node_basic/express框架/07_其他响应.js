const express = require("express");

const app = express();

app.get("/other", (req, res) => {
  // 跳转响应
  //   res.redirect("http://atguigu.com");
  // 下载响应
  //   res.download(__dirname+'/package.json')
  // JSON响应
  //   res.json({
  //     name: "山里的闲人",
  //     zuoyoum: "赚更多的钱",
  //   });
  // 响应文件内容
  res.sendFile(__dirname + '/test.html')
});

app.listen(3000, () => {
  console.log("服务已启动...");
});
