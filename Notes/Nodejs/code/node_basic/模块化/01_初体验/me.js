// 声明一个函数
function demo(){
    console.log('it is a demo');
}

function demo1(){
    console.log('it is a demo1')
}

// module.exports = {
//     demo,
//     demo1
// }
// module.exports = demo;

//module.exports可以暴露不同数据类型

//exports  暴露数据
exports.demo = demo;
exports.demo1 = demo1;


/**
 * 导入 JS、JSON文件可以省略后缀，同名情况下有限识别js文件
 * 导入其他类型的文件，也可以正常导入
 */