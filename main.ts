// 第一种方式
// console.log("hello")
console.log("hello")
// 第二种方式
// 这种方式，相当于把第一种方式封装成一个包，然后供其它人使用
//import "https://deno.land/std/examples/welcome.ts";

// console.log('这是reverie81封装的Deno库')
// 注意，这里引用自己封装的包
//import "http://localhost/deno/hello.ts"


// 测试当前文件是否为主程序
if(import.meta.main){
	console.log("main")
}
