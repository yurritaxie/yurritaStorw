const fs = require('fs');

// 文件重命名
fs.rename('./../file/春晓.txt','./../file/春天来了.txt',err=>{
    if(err){
        console.log('重命名失败')
    }
    console.log('重命名成功');
})

//文件的移动
fs.rename('./../file/复制春晓.txt','./复制春晓.txt',err=>{
    if(err){
        console.log('重命名失败')
        return
    }
    console.log('重命名成功');
})
