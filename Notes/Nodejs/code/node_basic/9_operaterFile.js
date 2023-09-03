// 导入 fs模块
const fs = require('fs');

// 异步创建文件夹
fs.mkdir('./../file', err => {
    if(err){
      console.log('创建失败');
    } else{
      console.log('创建成功');
    }  
})