{
  // es6中将 {'a':'aVal','b':'bVal'} 当作是object类型的值

  //声明一个集合
  let list = new Set();
  list.add(5);
  list.add(7);

  console.log('size',list.size);
}

{
  let arr = [1,2,3,4,5];
  //使用数组声明一个集合
  let list = new Set(arr);

  console.log('size',list.size);
}

{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1); //这里添加一个重复的元素

  console.log('list',list); //重复添加的元素会被去重

  //集合中可以存放不同的数据类型的数据
  let arr=[1,2,3,1,'2'];
  let list2=new Set(arr);

  console.log('unique',list2);
}

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  //判断集合中是否包含一个元素
  console.log('has',list.has('add'));
  //从集合中删除一个元素
  console.log('delete',list.delete('add'),list);
  //清空集合
  list.clear();
  console.log('list',list);
}

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  //集合的keys 和 values 方法返回结果是一样的

  for(let key of list.keys()){
    console.log('keys',key);
  }
  for(let value of list.values()){
    console.log('value',value);
  }
  for(let [key,value] of list.entries()){
    console.log('entries',key,value);
  }

  list.forEach(function(item){console.log(item);})
}


{

  // WeakSet存储的只能是对象类型，不能是值
  // WeakSet是一种弱引用（变量存储在WeakSet中不会阻止垃圾回收），其中存储的实际是变量的地址，而且不会检测相应的变量是否已经被垃圾回收
  // WeakSet没有clear方法 没有size属性 不能遍历

  let weakList=new WeakSet();

  let arg={};
  let arg1 = 0;

  weakList.add(arg);
  //weakList.add(arg1);//报错

  // weakList.add(2); //报错

  console.log('weakList',weakList);
}

{
  let map = new Map();
  let arr=['123'];

  map.set(arr,456);

  console.log('map',map,map.get(arr));
}

{
  let map = new Map([['a',123],['b',456]]);
  console.log('map args',map);
  console.log('size',map.size);
  console.log('delete',map.delete('a'),map);
  console.log('clear',map.clear(),map);
}

{
  let weakmap=new WeakMap();

  let o={};
  weakmap.set(o,123);
  console.log(weakmap.get(o));
}

// es 5 与 es6（这里主要强调的是set和map） 使用方式对比
{
  let map = new Map();
  let array  = [];
  map.set('t',1);
  array.push({'t':1});

  console.info('map-array',map,array);

  let map_exist = map.has('t');
  let array_exist = array.find(item=>item.t);
  console.info('map-array',map_exist,array_exist);

  map.set('t',2);
  array.forEach(item=>item.t?item.t = 2 : '');
  console.info('map-array-modify',map,array);


  map.delete('t');
  let index = array.findIndex(item => item.t);
  array.splice(index,1);
  console.info('map-array-empty',map,array);

}

{

  let set = new Set();
  let array = [];

  set.add({'t':1});
  array.push({t:1});
  console.info('set-array',set,array);

  let set_exist = set.has({'t':1}); //false
  let array_exist = array.find(item=>item.t);
  console.info('set-array',set_exist,array_exist);

  set.forEach(item=>item.t?item.t=2:'');
  array.forEach(item=>item.t?item.t=2:'');
  console.info('set-array-modify',set,array);

  set.forEach(item=>item.t?set.delete(item):'');
  let index = array.findIndex(item => item.t);
  array.splice(index,1);
  console.info('set-array-empty',set,array);

}

{

  let item = {t:1};
  let map = new Map();
  let set = new Set();
  let obj = {};

  map.set('t',1);
  set.add(item);
  obj['t'] = 1;
  console.info('map-set-obj',obj,map,set);

  console.info({
     map_exist:map.has('t'),
     set_exist:set.has(item),
     obj_exist:'t' in obj
  });

  map.set('t',2);
  item.t = 2;
  obj['t']=2;
  console.info('map-set-obj-modify',obj,map,set);

  map.delete('t');
  set.delete(item);
  delete obj['t'];
  console.info('map-set-obj-empty',obj,map.set);

}

