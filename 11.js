function one(){
    console.log("one");
}
function two(){
    console.log("two");
}
function three(){
    console.log("three");
}

one();
two();
three();

//12
console.log("Message 1");
setTimeout(()=>{console.log("Message 2 after 2 seconds")},2000);
console.log("Message 3");

//13
const id = setInterval(()=>{console.log("Loading...")},1000);
setTimeout(()=>{
    clearInterval(id);
    console.log("Loaded successfully!")},5000);

//14
console.log("Begin"); 
setTimeout(() => { console.log("Timeout Task"); }, 0);
Promise.resolve().then(() => { console.log("Promise Task"); }); console.log("End");
//it follows such because begin and end has no delay they are direct, timeout is there for timeout task and hence it is delayed, promise task is microtask and it has more priority.

//15
