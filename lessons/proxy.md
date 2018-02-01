## 对象代理

什么是对象代理呢？就是不让用户直接访问一个对象，只能通过代理去操作，类似于中介。比如我们用一个对象表示一个人，定义 Person 。对于人而言有姓名（name）、性别（sex）、年龄（age）。对于姓名和年龄都是可以修改的，而对于性别则是不可以修改的。对于这样的场景在ES3、ES5、ES6都有不同的实现方案。我们分别来看下：


### ES3的写法

```js
var Person = function() {
  let data = {
    name: 'es3',
    sex: 'male',
    age: 15
  };
  this.get = function(key) {
    return data[key];
  }
  this.set = function(key, value) {
    if (key !== 'sex') {
      data[key] = value
    }
  }
}
```

首先要用一个闭包把数据隔离开，避免外接可以直接访问，然后设置set、get接口操作数据。之所以这样做是 javascript 没有私有变量一说。应用的时候，需要实例化对象，然后通过接口对数据进行读写。

```js
// 声明一个实例
var person = new Person();
// 读取姓名，性别，年龄
console.table({name: person.get('name'), sex: person.get('sex'), age: person.get('age')});
// 修改姓名
person.set('name', 'es3-cname');
console.table({name: person.get('name'), sex: person.get('sex'), age: person.get('age')});
// 修改性别
person.set('sex', 'female');
console.table({name: person.get('name'), sex: person.get('sex'), age: person.get('age')})
```

### ES5的写法

对于 ES5 而言，JS 的功能要强大了许多，Object.defineProperty 方法可以定义或修改一个对象的属性的描述符。什么叫描述符呢？简单的说就是“可读写”、“可枚举”等。


首先要定义一个对象，然后使用 Object.defineProperty 重新修改某些属性达到只读的效果，代码如下：


```js
var Person = {
  name: 'es5',
  age: 15
};
Object.defineProperty(Person, 'sex', {
  writable: false,
  value: 'male'
});
// 读取姓名，性别，年龄
console.table({name: Person.name, sex: Person.sex, age: Person.age});
// 修改姓名
Person.name = 'es5-cname';
// 修改性别
try {
  Person.sex = 'female';
} catch (e) {
  console.log(e);
}
console.table({name: Person.name, sex: Person.sex, age: Person.age});
```

### ES6的写法

如果觉得 ES5 还是不够简洁，再看看 ES6 是如何通过代理的方式来做数据隔离保护的。


```js
let Person = {
  name: 'es6',
  sex: 'male',
  age: 15
}

let proxy = new Proxy(Person, {
  get(target, key) {
    return target[key]
  },
  set(target, key, value) {
    if (key !== 'sex') {
      target[key] = value;
    }
  }
});
// 读取姓名，性别，年龄
console.table({name: proxy.name, sex: proxy.sex, age: proxy.age});
// 修改性别
try {
  proxy.sex='female';
} catch (e) {
  console.log(e);
}
console.table({name: proxy.name, sex: proxy.sex, age: proxy.age});
```

想看效果，直接查看 source 目录下的 proxy.js 运行下试试。
