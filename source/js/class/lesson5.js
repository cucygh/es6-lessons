{
  //二进制数值书写
  console.log('B',0B111110111);
  //八进制数值书写
  console.log(0o767);
}

{
  //isFinite用来判断数字是否是可以穷尽的
  console.log('15',Number.isFinite(15));
  console.log('NaN',Number.isFinite(NaN));
  console.log('1/0',Number.isFinite('true'/0));
  console.log('NaN',Number.isNaN(NaN));
  console.log('0',Number.isNaN(0));

}

{
  console.log('25',Number.isInteger(25));
  console.log('25.0',Number.isInteger(25.0));
  console.log('25.1',Number.isInteger(25.1));
  console.log('25.1',Number.isInteger('25'));
}

{
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
  console.log('10',Number.isSafeInteger(10));
  console.log('a',Number.isSafeInteger('a'));
}

{
  //直接取小数的整数部分
  console.log(4.1,Math.trunc(4.1));  // 4
  console.log(4.9,Math.trunc(4.9));  // 4
}

{
  // sign函数对于负数返回-1  对于0返回0  对于正数返回1 对于非数字返回NaN
  console.log('-5',Math.sign(-5));  // -1
  console.log('0',Math.sign(0));  // 0
  console.log('5',Math.sign(5));  // 1
  console.log('50',Math.sign('50')); // 1
  console.log('foo',Math.sign('foo')); // NaN
}


{
  //cbrt函数用来求立方根
  console.log('-1',Math.cbrt(-1));
  console.log('8',Math.cbrt(8));
}
