// 导入http模块
const http = require("http");
// 导入url 模块
const url = require("url");
const server = http.createServer((request, response) => {
  // 实例化URL的对象=>传入完整的url
  let url = new URL(request.url, "http://127.0.0.1:9000");
  console.log(url);
  // 输出keyword 查询字符串
  console.log(url.searchParams.get("info"), "lall");
  response.end("url");
});

server.listen(9000, () => {
  console.log("服务已经启动.....");
});
