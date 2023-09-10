// 导入http模块
const http = require("http");

// 创建服务对象
const server = http.createServer((request, response) => {
  let url = new URL(request.url, "http://127.0.0.1:9000");
  let { method } = request;
  let { pathname } = url;
  response.setHeader("content-type", "text/html;charset=utf-8");
  if (method === "GET" && pathname === "/login") {
    response.end("登录页面");
  } else if (method === "GET" && pathname === "/region") {
    response.end("注册页面");
  } else {
    response.end("not found");
  }
});

server.listen(9000, () => {
  console.log("服务已经启动....");
});
