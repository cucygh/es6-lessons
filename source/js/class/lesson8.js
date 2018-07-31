{
  // 简洁表示法
  let o=1;
  let k=2;

  // es 5中的写法
  let es5={
    o:o,
    k:k
  };
  // es 6中的写法
  let es6={
    o,
    k
  };
  console.log(es5,es6);
  // es 5中的写法
  let es5_method={
    hello:function(){
      console.log('hello');
    }
  };
  // es 6中的写法
  let es6_method={
    hello(){
      console.log('hello');
    }
  };
  console.log(es5_method.hello(),es6_method.hello());
}

{
  // 属性表达式
  let a='b';
  //传统es 5 的写法
  let es5_obj={
    a:'c',
    b:'c'
  };

  // [a]表示是一个表达式  表示将变量a的值作为key
  let es6_obj={
    [a]:'c'
  }

  console.log(es5_obj,es6_obj);

}

{
  // 新增API

  //Object.is方法用来判断两个值是否相等  功能与 === 没有区别
  console.log('字符串',Object.is('abc','abc'),'abc'==='abc');  // true true
  console.log('数组',Object.is([],[]),[]===[]); // false false

  //对象拷贝  将参数中的两个对象合并到了一起 并返回，这里的拷贝是浅拷贝
  console.log('拷贝',Object.assign({a:'a'},{b:'b'}));

  let test={k:123,o:456};
  //用于遍历
  for(let [key,value] of Object.entries(test)){
    console.log([key,value]);
  }
}

{
  // 扩展运算符
  // let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
  // c={
  //   c:'ddd',
  //   d:'ccc'
  // }
}
