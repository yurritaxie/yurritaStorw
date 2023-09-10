const http = require("http");

const server = http.createServer((request, response) => {
  // 设置响应状态码
  // response.statusCode = 404;
  // 设置响应状态的描述
  response.statusMessage = "iloveyou";
  // 设置响应头
  response.setHeader("content-type", "text/html;charset=utf-8");
  // 设置响应体 response.write=>可以进行多次调用  response.end=>只能调用一次
  response.write("love");
  response.write("love");
  response.write("love");
  response.write("love");
  response.end("山里的闲人");
});

server.listen(9000, () => {
  console.log("服务已经启动......");
});
