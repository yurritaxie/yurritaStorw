const demo = require('./me.js');

// demo();
// demo.demo();
// demo.demo1();

console.log(demo);

/**
 * 总结：module.exports 可以暴露任意数据
 * 不能使用 exports = value 的形式暴露数据，模块内部module与exports = module.exports = {}
 */