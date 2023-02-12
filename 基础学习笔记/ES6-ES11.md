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

## 4、模板字符串

<ul>
   模板字符串是增强版的字符串，用反引号（`)标识，特点：
    <li>字符串中可以出现换行符</li>
    <li>可以使用${×××}形式输出变量</li>
</ul>

## 5、简化对象写法

​		ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

<div style="color:red;font-weight:800;">注意：对象简写形式简化了代码，所以以后用简写就对了</div>

## 6、箭头函数

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

## 7、rest参数

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

## 8、spread 扩展运算符

​		扩展运算符（spread）也是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列，对数组进行解包

## 9、Symbol 基本使用

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

## 10、迭代器

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
<div style="color:red;font-weight:800;">注意：需要自定义遍历数据的时候，要想到迭代器。</div>

**迭代器的应用__自定义遍历数据**

```html
<script>
    const banji = {
        name: "终极一班",
        stus: [
            'xiaoming',
            'xiaohang',
            'laoda',
            'xiejia'
        ],
        [Symbol.iterator]() {
            let index = 0;
            return {
                next: function(){
                    if(index<this.stus.length){
                        const result ={value : _this.stus[i],done:false};
                        index++;
                        return result;
                    }else{
                        return {value : undefined, done:true}
                    }
                }
            }
        }
    }
    for(let v of banji){
        console.log(v)
    }
</script>
```

