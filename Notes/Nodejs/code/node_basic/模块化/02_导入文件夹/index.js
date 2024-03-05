/**
 * 导入的路径如果是个文件夹，则会首先检测该文件下package.json文件中main属性对应的文件
 * 如果存在则导入，反之如果文件不存在会报错
 * 如果main属性不存在，或者package.json不存在，则会尝试导入文件下index.js或者index.json
 * 如果还是没找到，就会报错
 * 注意：导入nodejs的内置模块时，直接require模块名称即可
 */

const demo = require('./module');

console.log(demo);
