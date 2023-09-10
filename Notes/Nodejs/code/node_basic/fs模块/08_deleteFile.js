let fs  = require('fs');
// 使用unlink进行删除  unlinkSync
fs.unlink('./春天来了.txt', err=>{
    if(err){
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
})

// 使用rm进行删除 node 14.4新引入的方法 rmSync
fs.rm('./复制春晓.txt',err=>{
    if(err){
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
})