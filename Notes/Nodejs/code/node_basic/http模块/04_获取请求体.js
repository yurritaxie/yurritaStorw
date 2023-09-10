const http = require("http");

// 创建服务对象
const server = http.createServer((request, response) => {
  let body = "";
  // 绑定事件 => 绑定data事件
  request.on('data', (chunk) => {
    body += chunk;
  });
  // 绑定事件 =》 绑定end事件
  request.on("end", () => {
    console.log(body);
  });
  response.end("hello http Server"); // 设置响应体
});

server.listen(9000, () => {
  console.log("服务已经启动....");
});
