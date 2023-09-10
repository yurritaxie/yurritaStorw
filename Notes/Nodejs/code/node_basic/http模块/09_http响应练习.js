const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html;charset=utf-8");
  let data = fs.readFileSync("./10_http响应练习.html");
  console.log(data); // buffer
  response.end(data);
});

server.listen(9000, () => {
  console.log("服务已经启动......");
});
