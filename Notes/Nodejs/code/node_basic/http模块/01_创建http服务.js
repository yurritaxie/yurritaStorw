const http = require('http')

const server = http.createServer((resquest, response) =>{
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end('你好');
})

server.listen(9000, () => {
    console.log('服务已经启动，端口为9000....');
})