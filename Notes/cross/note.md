# 后端解决跨域

## cors 给所有的请求加上跨域头部


```js
app.all('*',function(req, res, next){
    res.header("Access-Control-Allow-Origin",'*');  //允许所有的请求源
    res.header("Access-Control-Allow-Headers",'*');  //允许所有请求头 X-token
    res.header("Access-Control-Allow-Methods",'*');  //允许所有请求方法 post get put delete
    next();
})
```

# 前端解决跨域

## 在脚手架中配置proxy代理

**以webpack为例**
 1. 安装webpack以及其脚手架和webpack服务器

 ```js
    npm i webpack webpack-cli webpack-dev-server
 ```
 2. 新建webpack.config.js文件进行配置

 ```js
    module.exports = {
        mode: "development",  //配置模式
        devServer: {
            // 配置代理，代理请求url,以/api开头请求，转发到后端
            proxy: {
                '/api': {
                    target: "http://localhost:3000"
                }，
                '/api2': {
                target: "http://localhost:3000",
            }
            }
        },
    }
    // 注意此处可以配置多个代理
 ```

 3. 安装插件

 ```js
   //此插件用来将html和js文件进行整合
   npm i html-webpack-plugin
 ```
 4. 新建src文件，创建index.js

 ```js
    // 原生方式发送请求  ajax 
    let xhr = new  XMLHttpRequest();
    // xhr.open('get','http://localhost:3000/user')
    // 此处不需要再输入完整的地址，向前端代理服务器发送请求，由代理服务器发送给后端
    xhr.open('get','/api/user')
    xhr.onload = function(){
        console.log(xhr.response);
    }
    xhr.send();

    // 原生请求方式 fetch
    fetch("/user").then(res =>{
        return res.text()
    }).then(re=>{
        console.log(res)
    })

 ```
5. 修改配置文件package.json

```js
  "scripts": {
    "dev": "webpack-dev-server --config ./webpack.config.js", //--config ./webpack.config.js  配置，默认为webpack.config.js
    "start": "node server.js"
  },
```
6. 分别启动后端服务 和 前端服务
```js
   //后端服务
   node service.js
   //前端服务
   npm run dev
```

# 彻底解决跨域问题
1. 使用前后合并的处理方式
2. 前端打包后交给后端进行处理

# 其他方法
1. jsonp -->只支持get方法
2. websocket -->ws协议，长连接协议