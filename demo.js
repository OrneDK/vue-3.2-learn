function testParam(a, b = false, c) {
    if (b === true) {
        console.log('有传值');
    } else {
        console.log('未传值');
    }
}
testParam('1', true) // 有传值






/****************************************************************/
function testSecond() {
    let a = true;
    // 如果a为真,则执行Log方法,不为真,则不执行
    a && Log()
}

function Log() {
    console.log('测试方法')
}
testSecond()





/****************************************************************/

// 能将有length属性的对象转换为数组(特别注意： 这个对象一定要有length属性),但IE不支持
function testArguments(a1, a2, a3) {
    // arguments是一个对象,并且有length属性
    Array.prototype.slice.call(arguments, 1)
}
/****************************************************************/
// 在函数中包含大括号
function testScope() {
    {
        let a = 1
    }
    console.log(a, '===');
}
testScope()

/****************************************************************/
// 两个感叹号表示:如果有(除去null,undefined,NaN)值,会返回true,否则返回false

const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
let t = {
    type: {
        __asyncLoader: undefined
    }
}
console.log(isAsyncWrapper(t));