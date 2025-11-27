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
