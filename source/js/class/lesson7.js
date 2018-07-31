{
  //参数默认值
  function test(x, y = 'world'){
    console.log('默认值',x,y);
  }
  test('hello');
  test('hello','kill');
}

{
  let x='test';
  function test2(x,y=x){
    console.log('作用域',x,y);
  }
  test2('kill');  // kill kill   函数参数中的x的优先级比函数外定义的x高
}

{
  // rest参数  会将输入的所有参数转换成一个数组
  function test3(...arg){
    for(let v of arg){
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');
}

{
  //扩展运算符   将元素拆成离散的值
  console.log(...[1,2,4]);
  console.log('a',...[1,2,4]);
}

{
  //箭头函数  需要注意的是  剪头函数中的this是指箭头函数调用处的对象  而function中的this指的是当前对象
  let arrow = v => v*2;
  let arrow2 = () => 5;
  console.log('arrow',arrow(3));
  console.log(arrow2());

}

{
  //尾调用，指函数的最后调用了一个函数    好处是可以提升性能
  function tail(x){
    console.log('tail',x);
  }
  function fx(x){
    //这里就是尾调用
    return tail(x)
  }
  fx(123)
}
