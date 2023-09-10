// 导入http模块
const http = require("http");
// 导入url 模块
const url = require("url");
const server = http.createServer((request, response) => {
  // 解析request.url =>url模块 => url.parse()
  //   let res = url.parse(request.url);
  //   let pathname = res.pathname;
  //   console.log(res, pathname);
  //   response.end("url");
  let res = url.parse(request.url, true);
  console.log(res);
  let keyword = res.query.keyword;
  response.end("url");
});

server.listen(9000, () => {
  console.log("服务已经启动.....");
});
