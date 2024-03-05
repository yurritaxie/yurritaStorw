// 导入express
const express = require("express");
// 创建应用实例
const app = express();

// 创建路由
app.get("/:id.html", (req, res) => {
  //在路由中添加参数占位符,类似于:id这种形式
  // 获取路由参数 req.params
  console.log(req.params.id);
  res.end("hello express");
});

//监听端口，启动服务
app.listen(9000, () => {
  console.log("服务启动，端口号为9000...");
});
