// alloc  创建一个指定大小的buffer，参数为这个buffer所占用的内存大小，单位是byte
//这个分配空间，而且会清除原先的数据
let buf = Buffer.alloc(10)
// console.log(buf,'buf');
//allocUnsafe  创建一个指定大小的buffer，但是buffer中可能含有敏感数据，这个只分配空间，但是不会清除原先的数据
let buf1 = Buffer.allocUnsafe(10)
console.log(buf1,'buf1');
//from   将一个字符串转换为buffer;
let str = 'hello nodejs'
let buf3 = Buffer.from(str)
console.log(buf3,'buf3');
//读取buf里面的数据
console.log(buf3[0],'读取');
//读取buf里面的数据为2进制数
console.log(buf3[0].toString(2),'2进制');
//buffer.toString()  可以将缓冲区的数据转化为字符串
console.log(buf3.toString());

//溢出
let buf4 = Buffer.from('yurrita');
buf4[0] = 361; //二进制最大的数位255  361转化为二进制数为0001 0110 1001
console.log(buf4[0]); //105(十进制) =》 0110 1001(二进制)  舍弃了高位的数字

// 中文
let buf5 = Buffer.from('你好');
console.log(buf5, 'utf-8中的中文是占用3个byte');