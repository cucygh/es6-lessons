let callbacks = [];
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2; };
}

console.table([
  callbacks[0]() === 0,
  callbacks[1]() === 2,
  callbacks[2]() === 4
])


var callbacks2=[]
for (var i = 0; i <= 2; i++) {
    callbacks2[i] = function () { return i * 2; };
}

console.table([
  callbacks2[0]() === 0,
  callbacks2[1]() === 2,
  callbacks2[2]() === 4
]);

{
    function foo () { return 1 }
    console.log('foo()===1',foo() === 1);
    {
        function foo () { return 2 }
        console.log('foo()===2',foo() === 2);
    }
    console.log('foo()===1',foo() === 1);
}

(function () {
    var foo = function () { return 1; }
    console.log('foo()===1',foo() === 1);
    (function () {
        var foo = function () { return 2; }
        console.log('foo()===2',foo() === 2);
    })();
    console.log('foo()===1',foo() === 1);
})();
