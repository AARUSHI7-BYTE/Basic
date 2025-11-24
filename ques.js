const add=(a,b)=>{
    return `${a+b}`
}
console.log(add(5,7));

const string=(a,b,c)=>{
    return `${a} ${b} ${c}`
}
console.log(string("hello","world","!"));

const fullname=(firstname,lastname)=>{
    return `${firstname} ${lastname}`;
}
console.log(fullname("John","Doe"));

const square=(n)=>n*n;
console.log(square(3));

const obj = {
  value: 50,
  test(){
    return this.value;
  }
};
console.log(obj.test());

const product = { name: "Pen", price: 10 };
const copy ={...product};
console.log(copy);

const a = { x: 1 };
const b = { y: 2 };
const merge={...a,...b};
console.log(merge);

function maxvalue(...nums){
    return Math.max(...nums);
}
console.log(maxvalue(3,4,5,7));

const arr = [10, 20, 30];
const[first,second,third]=arr;
console.log(first);
console.log(second);
console.log(third);

const laptop = { brand: "Dell", ram: "8GB" };
const {brand:name}= laptop;
console.log(name);

const info = {
    title:"book",
    student:()=>{console.log("this.title")
    },
    libname:"library"
};

console.log(info.student());

for (var i = 0; i < 3; i++) {}
console.log(i);
// here it will print 3 because var is function scoped;

for (let j = 0; j < 3; j++) {}
//console.log(j);
// here it will give error because let is block scoped;
// const is used because it cannot change the value later once assigned.

const s=70;
const speed=(s>60)? "Fast":"Normal";
console.log(speed);

const age=19;
const agecheck=(age>=18)? "Adult":"Minor";
console.log(agecheck);

const number=4;
const check=(number>0)? "Positive":(number<0)? "Negative":"Zero";
console.log(check);

const nums = [1,2,3];
const adding =[4,5];
const done=[...nums,...adding];
console.log(done);

a = ["x","y"];
b = ["z"];
const combine=[...a,...b];
console.log(combine);

function printNames(...names) {
    return names;
}

console.log(printNames("A", "B", "C"));

const user = { id: 101, status: "active" };
const{id,status}=user;
console.log(id);
console.log(status);

const id = 101;
const role = "admin";
const user = {
  id: id,
  role: role
};
const user2={id,role,user:{id,role}};
console.log(user2)

const id = 101;
const role = "admin";
const name = "Alice";

const user = {
  id,        
  role,     
  name,      
  greet() {
    return `Hello, ${this.name}!`;
  }
};

console.log(user.greet());

const today = new Date(). toDateString();
console.log(today);

function run(name,SCORE){
    return `Hello ${name}, your score is ${SCORE}/100`;
}

console.log(run("neha",85));

function multiply(a,b){
    return a*b;
}
//converted to arrow function
const multiply=(a,b)=>(a*b);

const isAdult=(age>=18)? true:false;
const double=(n)=>n*2;
const array=[1,2,4];
const copying = [...array];
console.log(copying);

const array2=[100];
const combined=[...array2,...array];
console.log(combined);

const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user.address.city);
console.log(user.job.title);