const http = require("http");
const fs = require("fs");
const path = require("path");
let mime = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  mp4: "video/mp4",
  mp3: "audio/mpeg",
  json: "application/json",
};
const server = http.createServer((request, response) => {
  if(request.method !== 'GET'){
    response.statusCode = 405;
    response.end('<h1>405 Not Allowed</h1>')
  }
  const { pathname } = new URL(request.url, "http://127.0.0.1:9000");
  // 拼接文件路径
  let filePath = __dirname + "/page" + pathname;
  // response.setHeader("content-type", "text/html;charset=utf-8");
  // 设置资源类型（mime类型）  获取文件的后缀名
  let ext = path.extname(filePath).slice(1);
  let type = mime[ext];
  if (type) {
    if (ext === "html") {
      response.setHeader("content-type", `${type};charset=utf-8`);
    } else {
      response.setHeader("content-type", type);
    }
  } else {
    response.setHeader(
      "content-type",
      "application/octet-stream,charset=utf-8"
    );
  }
  // 读取文件
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 完善错误
      switch(err.code){
        case 'ENOENT':
          response.statusCode = 404;
          response.end('<h1>404 Not Found</h1>');
          break
        case 'EPERM':
          response.statusCode = 403;
          response.end('<h1>403 Forbidden</h1>');
        default:
          response.statusCode = 500;
          response.end('<h1>Internal Server Error</h1>')
      }
      response.statusCode = 500;
      response.end("文件读取失败");
      return;
    }
    response.end(data);
  });
});

server.listen(9000, () => {
  console.log("服务已经启动....");
});
