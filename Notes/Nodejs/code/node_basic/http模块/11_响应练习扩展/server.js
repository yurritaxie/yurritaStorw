/**
 * 思路：1、不同的请求返回不同的内容
 *
 */
const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  const { pathname } = new URL(request.url, "http://127.0.0.1:9000");
  if (pathname === "/") {
    let html = fs.readFileSync(__dirname + "/page/index.html");
    response.end(html);
  } else if (pathname === "/index.css") {
    let css = fs.readFileSync(__dirname + "/page/index.css");
    response.end(css);
  } else if (pathname === "/index.js") {
    let js = fs.readFileSync(__dirname + "/page/index.js");
    response.end(js);
  } else {
    response.end("Not Found");
  }
});

server.listen(9000, () => {
  console.log("服务已经启动....");
});
