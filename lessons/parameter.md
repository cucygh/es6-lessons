## 参数

函数的参数是大家经常要打交道的，ES6 在参数处理上提供了极大的便利。

### 默认参数

当有多个参数的时候，我们经常希望一样参数可以不输入，使用默认值。这在 ES3 和 ES5 的时候写起来有点费劲，要逐一判断然后把默认值写到函数里。代码如下：

```js
function f(x, y, z) {
  if (y === undefined)
    y = 7;
  if (z === undefined)
    z = 42;
  return x + y + z;
};
console.log(f(1));
```

大家看下这段代码，x 参数是必选的，y、z 是可选的。在函数体内判断 y、z 是否已经赋值，没有的话再使用默认值。大家想想，如何参数有多个，参数的类型是对象，那写起来是不是很费劲？ES6 帮大家解决这个问题，直接上代码：

```js
function f(x, y = 7, z = 42) {
  return x + y + z
}
console.log(f(1));
```

在这段代码中很明显，x 是必选参数，y、z 是可选的。可是与上面的代码相比是不是简洁了很多。当输入两个参数的时候第一个参数是x、第二个参数就不会使用默认值。但是下面这段代码大家仔细看看：

```js
function f(x, y = 7, z = 42 , o) {
  return x + y + z
}
console.log(f(1));
```

有同学说参数这样写行不行，我想说行是行，但是 y、z 的默认值效果就不理想了。你看看 o 的取值是不是很尴尬。当你省掉 y、z 的时候 o 始终取不到值。因为当你输入两个参数的时候，第一个给了 x ，第二个给了 y 。所以 o 是取不到值的。


那么如何让 x 参数成为必选参数呢？不设置这个参数就报错，利用默认值就可以轻松做到。

```js
function checkParameter(){
  throw new Error('can\'t be empty!')
};

function f(x = checkParameter(),y = 2,z = 3){
  return x + y + z
}

console.log(f());
```



还有值得一提的是函数的 length 属性。length 返回的是默认参数之前参数的个数。

```js
(function(a,b){}).length   // 返回的是 2 。
```

```js
(function(a,b,c=2){}).length   // 返回的是 2 。
```

```js
(function(a,b,c=2,d=3,e){}).length   // 返回的是 2 。
```

所以再次证明参数的默认值要放在必选参数之后。



### rest 参数

当函数的参数是可变的时候如何取到这些参数呢？看如下代码：

```js
function f(a,b){
  return a+b
}
```

这个函数实现参数的求和功能，如果执行 f(1,2) 直接返回 3 。如果执行 f(1,2,3) 仍然返回 3 。如果想让它返回 6 呢，那就需要函数支持可变参数的取值。那在 ES5 中可以这样做：

```js
function f(){
  var a = Array.prototype.slice.call(arguments);
  var sum = 0;
  a.forEach(function(item){
    sum+=item*1
  })
  return sum
}
```

这样定义 f 函数就可以对可变参数取值并完成求和计算。f(1,2,3) 输出 6 。那么在 ES6 中该如何做呢？

```js
function f(...a){
  var sum = 0;
  a.forEach(item=>{sum+=item*1});
  return sum
}
```

在 ES6 中就不用 arguments 来获取所有参数，直接使用 rest 参数就可以了。


### 扩展运算符

扩展运算符是 ES6 中很有趣的地方。具体怎么有趣呢，比如要合并两个数组。

```js
// ES5
var params = [ "hello", true, 7 ];
var other = [ 1, 2 ].concat(params);
```
通过数组的 concat API 完成了两个数组的合并。在 ES6 中用扩展运算符轻松实现。

```js
// ES6
var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
```

当然除了数组合并，字符串分割依然可以使用扩展运算符。

```js
// ES5
var str = "foo";
var chars = str.split(""); // [ "f", "o", "o" ]
```

在 ES5 中依然是使用数组的 API split 来分割字符。在 ES6 中用扩展运算符就可以了。

```js
// ES6
var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]
```

惊不惊喜、意不意外，ES6 就是如此强大！
