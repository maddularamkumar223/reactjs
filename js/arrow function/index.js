// // ! Arrow function
// let demo = () => {
//   console.log("I am a arrow function");
// };
// demo();
// let demo1 = () => console.log("I am a demo1 function");
// demo1();
// let demo2 = ($) => console.log("I am a demo2 function");
// demo2();
// let displayName = (data) => console.log(data);
// displayName("Ravi");
// let demo3 = (_) => "I am a demo3 function";
// console.log(demo3());
// let demo4 = () => {
//   return "I am a demo4 function";
// };
// console.log(demo4());

// @ Higher-order function and call back function
let cal = (a,b,operation) => operation(a,b)
// ! Call back function
let add = (a,b) => a+b
let sub = (a,b) => a-b
let mul = (a,b) => a*b
let div = (a,b) => a/b 
console.log(cal(10,20,add))
console.log(cal(10,20,sub))
console.log(cal(10,20,mul))




