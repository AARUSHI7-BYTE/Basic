const iseven=(n)=>{
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
};
console.log(iseven(5));

m= 30;
const marks=(m>=35)? "Pass":"Fail";
console.log(marks);

const greet=(name)=>{
    if(name){
        return "Hello"+ name;
    }
    else{
        return "Hello Guest";
    }
}
console.log(greet(""));