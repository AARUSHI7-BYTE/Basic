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

//13 question
const students =  [ { "name": "Alice", "marks": 58 },
  { "name": "Bob", "marks": 85 },
  { "name": "Charlie", "marks": 92 },
  { "name": "David", "marks": 45 },
  { "name": "Emma", "marks": 76 },
  { "name": "Frank", "marks": 63 },
  { "name": "Grace", "marks": 89 },
  { "name": "Hannah", "marks": 95 },
  { "name": "Ian", "marks": 54 },
  { "name": "Jack", "marks": 79 },
  { "name": "Kate", "marks": 67 },
  { "name": "Leo", "marks": 88 },
  { "name": "Mia", "marks": 91 },
  { "name": "Nathan", "marks": 72 },
  { "name": "Olivia", "marks": 82 }
];
function getstudentnames(students){
    return students.filter(student => student.marks > 60).sort((a, b) => b.marks - a.marks).map(student => student.name);
}
const result = getstudentnames(students);
console.log(result);