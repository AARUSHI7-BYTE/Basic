const input= [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];

let r= input.map(input=>input.name);
console.log(r);

input.forEach(item=>{
    if(item.price>50){
        console.log(`${item.name} is above $50`);
    }
    else{
        console.log(`${item.name} is below $50`);
    }
});