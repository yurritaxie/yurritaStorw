//BOM
// console.log(window) //抛出错误BOM的api不能再nodejs中使用
// console.log(history);
// console.log(navigator);
// console.log(location);
//DOM
// console.log(document); //抛出错误DOM的api不能再nodejs中使用
//AJAX
// let xhr = new XMLHttpRequest(); //抛出错误DOM的api不能再nodejs中使用
console.log('i love you');
setTimeout(()=>{
    console.log('定时器可以在node中进行使用');
},1000)

// global nodejs中的顶级对象,也可以使用globalThis访问顶级对象
console.log(global);
console.log(globalThis === global); //es2020规范中引入的