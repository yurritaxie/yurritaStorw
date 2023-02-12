# ES6新特性

## 1、let关键字

let关键字用来声明变量，使用let声明的变量有几个特点：
<ul>
    <li>不允许重复声明</li>
    <li>块级作用域</li>
    <li>不存在变量提升</li>
    <li>不影响作用域链</li>
</ul>

<div style="color:red;font-weight:800;">应用场景：以后声明变量使用let就对了</div>

## 2、const 关键字

const 关键字用来声明常量，const声明有一下特点

 <ul>
     <li>声明必须赋初始值</li>
     <li>标识符一般为大写</li>
     <li>不允许重复声明</li>
     <li>值不允许修改</li>
 </ul>

<div style="color:red;font-weight:800;">注意：对象属性修改和数组元素变化不会触发const错误</div>

<div style="color:red;font-weight:800;">应用场景：声明对象类型使用const, 非对象类型声明选择let</div>

## 3、变量的解构赋值

​		ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这杯称为解构赋值。

```js
//数组的解构赋值
const arr = ['张学友', '刘德华', '李敏', '郭富城'];
let [zhang, liu, li, guo] = arr;
//对象的解构赋值
const obj = {
    name: '山里的闲人',
    tags: ['野人', '美女', '程序员']
}
let {name, tags} = obj
//复杂结构
```

## 4、字符串的扩展

 <ul>
     <li><b>includes()：</b>返回布尔值，表示是否找到了参数字符串。</li>
     <li><b>startsWith()：</b>返回布尔值，表示参数字符串是否在源字符串的头部。</li>
     <li><b>endsWith()：</b>返回布尔值，表示参数字符串是否在源字符串的尾部。</li>
 </ul>

```js
var s = 'Hello world!';
s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
var s = 'Hello world!';
s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```

<div style="color:green;">注意：这三个方法都支持第二个参数，表示开始搜索的位置。第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。</div>

 <ul>
     <li><b>repeat()：</b>返回一个新字符串，表示将原字符串重复n次。参数如果是小数，会被取整。如果repeat的参数是负数或者Infinity，会报错。但是，如果参数是0到-1之间的小数，则等同于0，这是因为会先进行取整运算。0到-1之间的小数，取整以后等于-0，repeat视同为0。参数NaN等同于0。如果repeat的参数是字符串，则会先转换成数字。</li>
 </ul>

```js
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
'na'.repeat(2.9) // "nana"
'na'.repeat(Infinity)
// RangeError
'na'.repeat(-1)
// RangeError
'na'.repeat(-0.9) // ""
'na'.repeat(NaN) // ""
'na'.repeat('na') // ""
'na'.repeat('3') // "nanana"
```

## 5、对象的扩展

## 6、数组的扩展

## 7、函数的扩展

## 8、数值的扩展



## 9、模板字符串

<ul>
   模板字符串是增强版的字符串，用反引号（`)标识，特点：
    <li>字符串中可以出现换行符</li>
    <li>可以使用${×××}形式输出变量</li>
</ul>
## 10、简化对象写法

​		ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

<div style="color:red;font-weight:800;">注意：对象简写形式简化了代码，所以以后用简写就对了</div>

## 11、箭头函数

​		ES6 允许使用「箭头」（=>）定义函数。

箭头函数的注意点：

<ul>
    <li>如果形参只有一个，则小括号可以省略</li>
    <li>函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果</li>
    <li>箭头函数 this 指向声明时所在作用域下 this 的值</li>
    <li>箭头函数不能作为构造函数实例化</li>
    <li>不能使用 arguments</li>
</ul>

<div style="color:red;font-weight:800;">注意：箭头函数不会更改 this 指向，用来指定回调函数会非常合适</div>

## 12、rest参数

```js
//ES6引入rest参数，用于获取函数的实参，用来代替arguments
//es5获取实参的方式
function fn(){
    console.log(arguments)
}
fn('萧山','劳拉', '密密')
//rest参数
function fn(...args){
    console.log(args)
}
fn(1,2,3,4,5)
//rest参数必须放在最后面
function fn(a,b,...args){
    console.log(a)
    console.log(b)
    console.log(args)
}
```

## 13、spread 扩展运算符

​		扩展运算符（spread）也是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列，对数组进行解包

## 14、Symbol 基本使用

​		ES6 引入了一种新的原始数据类型 Symbol， 表示独一无二的值。它是JavaScript 语言的第七种数据类型，是一种类似于字符串的数据类型。

**Symbol 特点：**

<ul>
    <li>Symbol 的值是唯一的，用来解决命名冲突的问题</li>
    <li>Symbol 值不能与其他数据进行运算</li>
    <li>Symbol 定义的对象属性不能使用 for…in 循环遍历， 但是可以使用Reflect.ownKeys 来获取对象的所有键名</li>
    <li>箭头函数不能作为构造函数实例化</li>
    <li>不能使用 arguments</li>
</ul>

<div style="color:red;font-weight:800;">注意：遇到唯一性场景时可以使用Symbol</div>

**Symbol 内置值：**

<table>
    <tr>
        <td style='color:green'>Symbol.hasInstance</td>
        <td>当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法</td>
    </tr>
     <tr>
        <td style='color:green'>Symbol.isConcatSpreadable</td>
        <td>对象的Symbol.isConcatSpreadable属性等于的是一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开</td>
    </tr>
    <tr>
        <td style='color:green'>Symbol.unscopables</td>
        <td>该对象指定了使用with关键字时，哪些属性会被with环境排除</td>
    </tr>
    <tr>
        <td style='color:green'>Symbol.match</td>
        <td>当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值</td>
    </tr>
    <tr>
        <td style='color:green'>Symbol.replace</td>
        <td>当该对象被str.replace方法调用时，会返回该方法的返回值</td>
    </tr>
    <tr>
        <td style='color:green'>Symbol.search</td>
        <td>当该对象被str.search方法调用时，会返回该方法的返回值</td>
    </tr>
    <tr>
        <td style='color:green'>Symbol.split</td>
        <td>当该对象被str.split方法调用时，会返回该方法的返回值</td>
    </tr>
    <tr>
        <td style='color:green'>Symbol.iterator</td>
        <td>对象进行for...of循环时，回调用Symbol.iterator方法，返回该对象的默认遍历器</td>
    </tr>
    <tr>
        <td style='color:green'>Symbol.toPrimitive</td>
        <td>该对象被转为原始类型的值时，会调用这个方法，返回该对象的原始类型</td>
    </tr>
    <tr>
        <td style='color:green'>Symbol.toStringTag</td>
        <td>在该对象上面调用toSting方法时，返回该方法的返回值</td>
    </tr>
    <tr>
        <td style='color:green'>Symbol.species</td>
        <td>创建衍生对象时，会使用该属性</td>
    </tr>
</table>

## 15、Iterator迭代器

​		遍历器（Iterator）就是一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作。		

<ul>
    <li>ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费</li>
    <li>原生具备 iterator 接口的数据(可用 for of 遍历)</li>
    <ul style = "type: circle">
        <li>Array</li>
        <li>Arguments</li>
        <li>Set</li>
        <li>Map</li>
        <li>String</li>
        <li>TypedArray</li>
        <li>NodeList</li>
    </ul>
    <li>工作原理</li>
     <ul style = "type: circle">
        <li>创建一个指针对象，指向当前数据结构的起始位置</li>
        <li>第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员</li>
        <li>接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员</li>
        <li>每调用 next 方法返回一个包含 value 和done 属性的对象</li>
    </ul>
</ul>
<div style="color:red;font-weight:800;">注意：需要自定义遍历数据的时候，要想到迭代器</div>

**迭代器的应用—自定义遍历数组**

## 16、Generator生成器

​		生成器函数是ES6提供的一种异步变成解决方案，语法行为与传统的函数完全不同

```html
<script>
function*gen(){
    yield '一只没有耳朵';
    yield '一只没有尾巴';
    return '真奇怪';
}
    let iterator = gen();
    console.log(iteator.next());
    console.log(iteator.next());
    console.log(iteator.next());
</script>
```

**代码说明：**

<ul>
    <li>* 的位置没有限制</li>
    <li>生成器函数返回的结果是迭代器对象，调用迭代器对象的 next 方法可以得到yield 语句后的值</li>
    <li>yield相当于函数的暂停标记，也可以认为是函数的分隔符，每调用一次next方法，执行一段代码</li>
    <li>next方法可以传递实参，作为yield语句的返回值</li>
</ul>

## 17、Promise对象

```js
/**
 * 进程和线程
 * - 进程（厂房）
 *   - 程序运行的环境
 * - 线程（工人）
 *   - 线程是实际进行运算的东西
 * 
 * 同步
 *    — 通常情况代码都是自上而下一行一行执行的
 *    — 前边的代码不执行后面的代码也不会执行
 *    — 同步的代码执行会出现阻塞的情况
 *    — 一行代码执行慢会影响到整个程序的执行
 * 解决同步问题：
 *    — java python
 *      — 通过多线程来解决
 *    — node.js
 *      — 通过异步的方式来解决
 * 异步 
 *    — 一段代码的执行不会影响到其他的程序
 *    — 异步的问题：
 *        异步的代码无法通过return来设置返回值
 *    — 特点：
 *      1、不会阻塞其他代码的执行
 *      2、需要通过回调函数来返回结果
 *    — 基于回调函数的异步带来的问题
 *      1、代码可读性差
 *      2、可调试性
 *    — 解决问题：
 *      — 需要一个东西，可以代替回调函数来给我们返回结果
 *      — Promise横空出世
 *        — Promise是一个可以用来存储数据的对象
 *          Promise存储数据的方式比较特殊
 *          这种特殊方式使得Promise可以用来存储异步调用的数据
 *      
*/
// console.log('哈哈');
// console.log('嘻嘻');
// console.log('嘿嘿');
function sum(a, b, cd){
    const begin = Date.now()
    // while( Date.now - begin < 1000){   
    // }
    setTimeout(()=>{
        cd(a+b)
    },1000) 
}
console.log('111111');
sum(123, 456, (result)=>{
    console.log(result);
})
console.log('222222');

```

```htaccess
// 创建Promise
// 创建Promise时，构造函数中需要一个函数作为参数
// Promise构造函数的回调函数，它会在创建Promise时调用，调用时会有两个参数传递进去
const promise = new Promise((resolve, reject) => {
    // resolve 和 reject 时两个函数，，通过两个函数可以向Promise中存储数据
    // resolve在执行正常时存储数据，reject在执行错误时存储数据
    // reject('哈哈')
    // 通过函数来向Promise中添加数据，好处就是可以用来添加异步调用的数据
    setTimeout(() => {
        resolve('正常执行存储数据')
        reject('失败执行存储数据')
    }, 2000)
})
// setTimeout(() => {
//     console.log(promise);
// }, 3000)

/**
 * 从Promise中读取数据
 * — 可以通过Promise的实例方法then来读取Promise中存储的数据
 * — then需要两个回调函数作为参数，回调函数用来读取Promise中的数据，通过resolve存储的数据，会调用第一个函数返回，可以在第一个函数中编写处理数据的代码；通过reject存储的数据，会调用第二个函数返回，可以在第二个函数中编写处理异常的代码
*/
// promise.then((result)=>{
//     console.log('resolve', result);
// }, (reason) => {
//     console.log('reject', reason);
// })
/**
 * Promise中维护了两个隐藏属性
 *     PromiseResult
 *         — 用来存储数据
 *     PromiseState
 *         — 记录Promise的状态
 *          pending （进行中）
 *          fulfilled （完成） 通过resolve存储数据时
 *          rejected （拒绝，出错了） 出错了或者通过reject存储数据
 *        — state只能修改一次，修改以后永远不会再变
 *     流程：
 *         当Promise创建时，PromiseState初始值为pending
 *             当通过resolve存储数据时  PromiseState 变成fulfilled（完成）  
 *                 PromiseResult变为存储的数据
 *             当通过reject 存储数据或者出错时  PromiseState 变成rejected（拒绝）
 *                 PromiseResult 变成存储的数据 或 异常对象 
 *         当我们通过then读取数据时，相当于为Promise设置了回调函数
 *             如果PromiseState变为fulfilled，则调用then的第一个回调函数来返回数据
 *             如果PromiseState变为rejected，则调用then的第二个回调函数来返回数据
 */
const promise2 = new Promise((resolve, reject) => {
    resolve('隐性属性')
})

console.log(promise2);
/**
 *  catch() 用法和then类似，但是只需要一个回调函数作为参数
 *      catch() 中的回调函数只会在Promise被拒绝的时才调用
 *      catch() 相当于 then(null, reason => {})
 *      catch() 就是一个专门处理Promise异常的方法
 *  finally() 
 *      无论是正常存储数据还是出现异常了，finally总会执行
 *      但是finally的回调函数中不会收到数据
 *      finally()通常用来编写一些无论成功与否都要执行的代码
 */
promise2.catch(reason => {
    console.log('promise执行失败或者异常');
})
promise2.finally(() => {
    console.log('无论什么情况都会执行');
})
```

```js
/**
 * 静态方法
 *     Promise.resolve() 创建一个立即完成的Promise
 *     Promise.reject()  创建一个立即拒绝的Promise
 *     Promise.all([...]) 同时返回多个Promise的执行结果，其中有一个报错，就会返回错误
 *     Promise.allSettled([...]) 同时返回多个Promise的执行结果（无论成功或者失败
 *     Promise.race([...]) 返回执行最快的Promise（不考虑对错）
 *     Promise.any([...])  返回执行最快的完成的Promise
 */
// Promise.resolve(10).then(r=>{
//     console.log(r);
// })
// Promise.reject('失败').catch(r=>{
//     console.log(r);
// })
function sum(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 100)
    })
}

// Promise.all([
//     sum(123,456),
//     sum(456,789),
//     sum(44,55)
// ]).then(result => {
//     console.log(result);
// })
// Promise.allSettled([
//     sum(123,456),
//     sum(456,789),
//     Promise.reject("哈哈"),
//     sum(44,55)
// ]).then(r => {
//     console.log(r);
// })
// Promise.race([
//     sum(123,456),
//     sum(456,789),
//     Promise.reject("哈哈"),
//     sum(44,55)    
// ]).then(r => {
//     console.log(r);
// }).catch(r => {
//     console.log(r);
// })
Promise.any([
    Promise.reject(111),
    Promise.reject(222),
    Promise.reject(333),
    // sum(123,456)
]).then(r => {
    console.log(r);
}).catch(r => {
    console.log('错误', r);
})
```



## 18、Set

​		ES6 提供了新的数据结构 Set（集合）。它类似于数组，但成员的值都是唯一的，集合实现了 iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历，集合的属性和方法：

<ul>
    <li>size 返回集合的元素个数</li>
    <li>add 增加一个新的元素，返回当前集合</li>
    <li>delete 删除元素，返回boolean值</li>
    <li>has 检测集合中是否包含某个元素，返回Boolean值</li>
    <li>clear 清空集合，返回undefined</li>
</ul>

```js
//创建一个空集合
let s = new Set();
//创建一个非空集合
let s1 = new Set([1,2,3,1,2,3]);
//集合属性与方法
//返回集合的元素个数
console.log(s1.size);
//添加新元素
console.log(s1.add(4));
//删除元素
console.log(s1.delete(1));
//检测是否存在某个值
console.log(s1.has(2));
//清空集合
console.log(s1.clear());
```

## 19、Map

​		ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键” 的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map 也实现了iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历。Map 的属性和方法：

<ul>
    <li>size 返回Map的元素个数</li>
    <li>set 增加一个新的元素，返回当前Map</li>
    <li>get 返回键名对象的键值</li>
    <li>has 检测Map中是否包含某个元素，返回Boolean值</li>
    <li>clear 清空集合，返回undefined</li>
</ul>

```js
//创建一个空 map
let m = new Map();
//创建一个非空 map
let m2 = new Map([ ['name','尚硅谷'],['slogon','不断提高行业标准'])
//属性和方法
//获取映射元素的个数
console.log(m2.size);
//添加映射值
console.log(m2.set('age', 6));
//获取映射值
console.log(m2.get('age'));
//检测是否有该映射
console.log(m2.has('age'));
//清除
console.log(m2.clear());
```

## 20、class类

​		ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过 class 关键字，可以定义类。基本上，ES6 的 class 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的 class 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

**知识点**

<ul>
    <li>class声明类</li>
    <li>construct定义构造函数初始化</li>
    <li>extends继承父类</li>
    <li>super调用父级构造方法</li>
    <li>static定义静态方法和属性</li>
    <li>父类方法可以重写</li>
</ul>

```js
//父类
class Phone {
//构造方法
    constructor(brand, color, price) {
    this.brand = brand; this.color = color; this.price = price;
    }
//对象方法
    call() {
    console.log('我可以打电话!!!')
    }
}
//子类
class SmartPhone extends Phone{
    constructor(brand,color,price, screen, pixel){
        super(brand, color, price); 
        this.screen = screen;
        this.pixel = pixel;
    }
    //子类方法
    photo(){
        console.log('我可以拍照！！')
    }
    playGame(){
        console.log('我可以玩游戏！！')
    }
    //方法重写
    call(){
        console.log('我可以进行视频通话')
    }
    //静态方法
    static run(){
        console.log('我可以运行程序')
    }
    static connect(){
        console.log('我可以建立连接')
    }
}
//实例化对象
const Nokia = new Phone('诺基亚', '灰色', 230);

const iPhone6s = new SmartPhone('苹果', '白色', 6088,
'4.7inch','500w');

//调用子类方法
iPhone6s.playGame();
//调用重写方法
iPhone6s.call();
//调用静态方法
SmartPhone.run();
```

