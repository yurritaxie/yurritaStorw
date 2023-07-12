let express =require('express')

let app = express()

//cors 给所有的请求加上跨域头部
app.all('*',function(req, res, next){
    res.header("Access-Control-Allow-Origin",'*');  //允许所有的请求源
    res.header("Access-Control-Allow-Headers",'*');  //允许所有请求头 X-token
    res.header("Access-Control-Allow-Methods",'*');  //允许所有请求方法 post get put delete
    next();
})



//接口
app.get("/user", (req,res)=>{
    let result = {
        name: "my-name",
        age: 4
    }
    res.json(result)
    //res.send(result)
})

app.listen(3000, ()=>{
    console.log("服务已经启动，端口3000")
})

//直接在浏览器中输入localhost:3000/user即可以拿到数据，注意只有是get请求的时候才能在浏览器上面测试