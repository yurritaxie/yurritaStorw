const http = require("http");

// 创建服务对象
const server = http.createServer((request, response) => {
  // 获取请求方法
  // console.log(resquest.method);
  // 获取请求地址
  //   console.log(request.url); // 其中只包含url中的路径与查询字符串
  //  console.log(request.httpVersion)
  // 获取请求头
  console.log(request.headers);
  response.end("hello http Server"); // 设置响应体
});

server.listen(9000, () => {
  console.log("服务已经启动....");
});
