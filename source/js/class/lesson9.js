{
  // es 6 新增了Symbol数据类型
    // 使用该数据类型声明的变量值一定是独一无二的，也就是说 如果我们声明let a = new Symbol();let b = new Symbol();  那么 a 和 b都是独一无二的 ，两者不会相等。
    // 但如果使用Symbol.for('a3');来声明变量，只要参数相等，两者就相等。

  // 声明
  let a1=Symbol();
  console.log('a1:',a1);
  let a2=Symbol();
  console.log('a2:',a2);
  console.log(a1===a2); // false
  let a3=Symbol.for('a3');
  console.log('a3',a3);
  let a4=Symbol.for('a3');
  console.log('a4',a4);
  console.log(a3===a4); //true
  console.log('compare with str:','a3' === a3); //false
}

{
  //Symbol可以用来处理 key相同的情况
  let a1=Symbol.for('abc');
  let obj={
    [a1]:'123',
    'abc':345,
    'c':456
  };
  console.log('obj',obj);

  //用entries方式遍历 无法取到Symbol类型的key
  for(let [key,value] of Object.entries(obj)){
    console.log('let of',key,value);
  }

  //可以使用Object.getOwnPropertySymbols(obj)来先获取数组，然后进行遍历，这个数组中会只包含Symbol类型的值
  Object.getOwnPropertySymbols(obj).forEach(function(item){
    console.log(obj[item]);
  })

  //可以使用Reflect.ownKeys(obj)来先获取数组，然后进行遍历，这个数组中会同时包含Symbol和非Symbol类型的值
  Reflect.ownKeys(obj).forEach(function(item){
    console.log('ownkeys',item,obj[item]);
  })
}
