

{
  console.log('a',`\u0061`);
  console.log('s',`\u20BB7`);

  console.log('s',`\u{20BB7}`);
}


{
  let s='𠮷';
  console.log('length',s.length);
  console.log('0',s.charAt(0)); //取第一个字符 es5方式  乱码 取了两个字节
  console.log('1',s.charAt(1));
  console.log('at0',s.charCodeAt(0));  //取第一个字符的码值 es5方式 取了两个字节
  console.log('at1',s.charCodeAt(1));

  //es6的codePointAt可以正确的处理4个字节存储的字符，返回一个字符的码点
  let s1='𠮷a';
  console.log('length',s1.length);
  console.log('code0',s1.codePointAt(0)); //取第一个字符的码值 es6方式 取了四个字节  十进制
  console.log('code0 hex',s1.codePointAt(0).toString(16)); //取第一个字符的码值  es6方式 转换成了16进制
  console.log('code0 convert',String.fromCodePoint("0x20bb7"));
  console.log('code1',s1.codePointAt(1)); //取第二个字符的码值 es6方式 取了两个字节
  console.log('code1 hex',s1.codePointAt(1).toString(16));
  console.log('code1 convert',String.fromCodePoint("0xdfb7"));
  console.log('code2',s1.codePointAt(2));
  console.log('code2 hex',s1.codePointAt(2).toString(16));
  console.log('code2 convert',String.fromCodePoint("0x61"));
}

{
  //es 5
  console.log(String.fromCharCode("0x20bb7"));
  //es 6
  console.log(String.fromCodePoint("0x20bb7"));
}

{
  let str='\u{20bb7}abc';
  //es 5
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]);
  }
  //es 6
  for(let code of str){
    console.log('es6',code);
  }
}

{
  let str="string";
  console.log('includes',str.includes("c"));
  console.log('start',str.startsWith('str'));
  console.log('end',str.endsWith('ng'));
}

{
  let str="abc";
  console.log(str.repeat(2));
}

{
  let name="list";
  let info="hello world";
  //模版字符串
  let m=`i am ${name},${info}`;
  console.log(m);
}

// es 7草案的api  需要引入  import 'babel-polyfill';
{
  console.log('1'.padStart(2,'0'));
  console.log('1'.padEnd(2,'0'));
}


//标签模版
{
  console.log("标签模版 start")
  let user={
    name:'list',
    info:'hello world'
  };
  //注意这里的abc
  console.log(abc`i am ${user.name},${user.info}`);
  // s参数是一个数组，其值是 由上面的模版字符串被变量分割而成的数组
  // v1 和 v2 分别对应上面模版字符串中的两个变量
  //上面的字符串模版的值 取决于 abc函数运行结果的值  也就是说可以在abc函数中对模版的值进一步进行处理 形成最终的结果
  function abc(s,v1,v2){
    console.log('in abc method : ',s,v1,v2);
    v1 = '[exec by func abc]'+v1;
    v2 = '[exec by func abc]'+v2;
    return s+v1+v2
  }
  console.log("标签模版 end")

}

{
  // raw 代表不执行转义
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}
