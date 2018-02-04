{
	// ES6 箭头函数
	let evens = [1, 2, 3, 4, 5];
	let odds = evens.map(v => v + 1)
	let pairs = evens.map(v => ({
		even: v,
		odd: v + 1
	}))
	let nums = evens.map((v, i) => v + i)
	console.table(evens, odds, pairs, nums)
}

{
  // ES5
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
}

{
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
}

{
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
}
