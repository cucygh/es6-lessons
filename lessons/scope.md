## 作用域

>JavaScript 有两个范围：全局和局部。  在函数定义之外声明的变量是全局变量，它的值可在整个程序中访问和修改。  在函数定义内声明的变量是局部变量。  每当执行函数时，都会创建和销毁该变量，且无法通过函数之外的任何代码访问该变量。  JavaScript 不支持块范围（通过一组大括号 {. . .} 定义新范围），但块范围变量的特殊情况除外。

这是ES5的时候MDN对JavaScript作用域的诠释。其实在ES6中增加了块作用域{...}，于此对应的两个支持块范围的变量 let 和 const。const上一小节讲过了，我们这小节重点讲 let 并区分 let 和 var 。

```javascript
let callbacks = [];
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2; };
}

console.table([
  callbacks[0]() === 0,
  callbacks[1]() === 2,
  callbacks[2]() === 4
])
```

运行结果如下：

<img src="../static/scope/let.output.png" alt="let运行结果" width="400">


```javascript
var callbacks2=[]
for (var i = 0; i <= 2; i++) {
    callbacks2[i] = function () { return i * 2; };
}

console.table([
  callbacks2[0]() === 0,
  callbacks2[1]() === 2,
  callbacks2[2]() === 4
])
```

运行结果如下：

<img src="../static/scope/var.output.png" alt="var运行结果" width="400">

只所以产生这样的区别，就是 let 是块作用域变量，每次循环的时候循环体就是一个块作用域，let 让变量重新绑定到块作用域。

- [MDN 作用域](https://msdn.microsoft.com/zh-cn/library/bzt2dkta(v=vs.94).aspx)
- [深入浅出ES6（十四）：let和const](http://www.infoq.com/cn/articles/es6-in-depth-let-and-const)
