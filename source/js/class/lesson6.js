{
  //用一组数据创建一个数组
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr);

  //这里返回的是空数组
  let empty=Array.of();
  console.log('empty',empty);
}

{
  let p=document.querySelectorAll('p');
  //将伪数组 转换成数组
  let pArr=Array.from(p);
  pArr.forEach(function(item){
    //item.textContent为原生的 获取文本内容的属性
    console.log(item.textContent);
  });

  //对第一个参数中的每一个元素 执行第二个参数的方法 然后返回修改后的数组
  console.log(Array.from([1,3,5],function(item){return item*2}));
}

{
  //将数组中的所有元素都换成一个值
  console.log('fill-7',[1,'a',undefined].fill(7)); // [7,7,7]
  // 第一个参数为要替换的值  第二个参数为替换元素的起始索引（包含）  第三个参数为替换元素的截止索引（不包含）
  console.log('fill,pos',['a','b','c'].fill(7,1,3));
}

{
  let ks = ['1','c','ks'].keys();
  console.log(ks);
  //遍历数组
  for(let index of ['1','c','ks'].keys()){
    //打印下标
    console.log('keys',index);
  }
  //遍历数组 注意values方法有兼容性问题
  for(let value of ['1','c','ks'].values()){
    //打印值
    console.log('values',value);
  }
  //遍历数组
  for(let [index,value] of ['1','c','ks'].entries()){
    //打印下标和值
    console.log('values',index,value);
  }
}

{
  //第一个参数代表从哪个下标索引开始替换   第二个参数代表替换所使用值的起始下标（包含） 第三个参数代表替换所使用值的截止下标（不包含）
  console.log([1,2,3,4,5].copyWithin(0,3,4)); // [ 4, 2, 3, 4, 5 ]
  console.log([1,2,3,4,5,6,7,8,9].copyWithin(1,4,7)); // [ 1, 5, 6, 7, 5, 6, 7, 8, 9 ]
}

{
  //查找 数组值 大于3 的第一个数组元素
  console.log([1,2,3,4,5,6].find(function(item){return item>3}));
  //查找 数组值 大于3 的第一个数组元素的索引
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));
}

{
  //查看数组中是否包含某个元素
  console.log('number',[1,2,NaN].includes(1));
  console.log('number',[1,2,NaN].includes(NaN));
}
