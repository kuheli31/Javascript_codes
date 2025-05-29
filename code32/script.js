console.log("one");//synchronous function
console.log("two");
console.log("three");

setTimeout(() => {//asynchronous function
    console.log("hello");
},2000);//1ms = 1000ms and we always use ms in setTimeout function

console.log("four");
console.log("five");
console.log("six");