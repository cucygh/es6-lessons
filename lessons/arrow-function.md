## 箭头函数

箭头函数是 ES6 很有趣的地方，这样函数写起来就省事多了。而且关于 this 也变得格外不同。


### 基本用法

```js
let evens = [1, 2, 3, 4, 5];
let odds = evens.map(v => v + 1)
let pairs = evens.map(v => ({
  even: v,
  odd: v + 1
}))
let nums = evens.map((v, i) => v + i)
console.table(evens, odds, pairs, nums)
```

上述代码 <code> v => v+1 </code> 就是箭头函数， 箭头左侧是函数的参数，当只有一个参数的时候可以不用 () ，等有多个参数的时候用 () 。箭头右侧是函数体，如何只有一行代码可以省略 {} 。


```js
var evens = [1, 2, 3, 4, 5];
var odds = evens.map(function (v) {
  return v + 1;
});
var pairs = evens.map(function (v) {
  return {
    even: v,
    odd: v + 1
  };
});
var nums = evens.map(function (v, i) {
  return v + i;
});
console.table(evens, odds, pairs, nums)
```

大家可以对比下 ES5 和 ES6 的写法。

### this 的不一样

在学习 ES6 之前，大家对于 this 的引用一致认为是函数运行调用的对象。但是在 ES6 中 this 是指向定义时函数所在的对象。

```js
// ES5、ES3
var factory=function(){
  this.a='a';
  this.b='b';
  this.c={
    a:'a+',
    b:function(){
      return this.a
    }
  }
}

console.log(new factory().c.b());
```

大家看下在 ES5、ES3 中用普通函数的写法，b 函数运行时是被 c 对象调用的，所以 this 指向的是 c ，那么 this.a 指向的就是 c.a 所以输出结果是 'a+'。我们来看下 ES6 下的箭头函数：

```js
var factory=function(){
  this.a='a';
  this.b='b';
  this.c={
    a:'a+',
    b:()=>{
      return this.a
    }
  }
}

console.log(new factory().c.b());
```

这个时候用的是箭头函数，b 函数中 this 指向的是定义时的对象，也就是 factory 类的实例，所以 this.a 就是构造函数的属性 a ，也就是 'a' 了。
