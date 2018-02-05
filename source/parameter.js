{
  // ES5 默认参数
  function f(x, y, z) {
    if (y === undefined)
      y = 7;
    if (z === undefined)
      z = 42;
    return x + y + z;
  };
  console.log(f(1));
}

{
  // ES6 默认参数
  function f(x, y = 7, z = 42) {
    return x + y + z
  }
  console.log(f(1));
}

{
  function checkParameter(){
    throw new Error('can\'t be empty!')
  };

  function f(x = checkParameter(),y = 2,z = 3){
    return x + y + z
  }
  console.log(f(1));
  try {
    console.log(f());
  } catch (e) {
    console.log(e);
  }
}

{
  // ES5 可变参数
  function f(){
    var a = Array.prototype.slice.call(arguments);
    var sum = 0;
    a.forEach(function(item){
      sum+=item*1
    })
    return sum
  }
  console.log(f(1,2,3));
}

{
  // ES6 可变参数
  function f(...a){
    var sum = 0;
    a.forEach(item=>{sum+=item*1});
    return sum
  }
  console.log(f(1,2,3));
}

{
  // ES5
  var params = [ "hello", true, 7 ];
  var other = [ 1, 2 ].concat(params);
  console.log(other);
}

{
  // ES6 扩展运算符
  var params = [ "hello", true, 7 ]
  var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
  console.log(other);
}

{
  // ES5
  var str = "foo";
  var chars = str.split(""); // [ "f", "o", "o" ]
  console.log(chars);
}

{
  // ES6
  var str = "foo"
  var chars = [ ...str ] // [ "f", "o", "o" ]
  console.log(chars);
}
