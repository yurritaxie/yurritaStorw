// 原生方式发送请求  ajax fetch
let xhr = new  XMLHttpRequest();
// xhr.open('get','http://localhost:3000/user')
// 此处不需要再输入完整的地址，向前端代理服务器发送请求，由代理服务器发送给后端
xhr.open('get','/api/user')
xhr.onload = function(){
    console.log(xhr.response);
}
xhr.send();


// 原生请求方式 fetch
fetch("/api/user").then(res =>{
return res.text()
}).then(res=>{
  console.log(res)
})