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
])
