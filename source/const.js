// ES6 声明常量的语法
const PI = 3.1415926;

// ES5 声明常量的语法
Object.defineProperty(typeof global === "object" ? global : window, "PI2", {
    value:        3.1415926,
    enumerable:   true,
    writable:     false,
    configurable: false
});

// 执行运行结果：

console.table([PI, window.PI2])

// 修改常量
// PI = 4;
// window.PI2=4;
