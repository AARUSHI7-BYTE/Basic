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

//12 question
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

//13
const items=  ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const counts = items.reduce((acc,items)=>{
    acc[items]=(acc[items]||0)+1;
    return acc;
},{});

console.log(counts);

const sortedCategories = Object.entries(counts)
  .sort((a, b) => b[1] - a[1])
  .map(entry => entry[0]);      

console.log(sortedCategories);



//14
const employees =[

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

];
const performancePriority = {
  "Excellent": 3,
  "Good": 2,
  "Needs Improvement": 1
};

const performance = employees
.filter(employees=>employees.tasksCompleted>5)
.map(employees=>{
    if (employees.rating>=4.5){
         level = "Excellent";
    }
    else if(3<employees.rating<4.5){
        level = "Good";
    }
    else{
        level= "Needs Improvement";
    }
      return {
      name: employees.name,
      performance: level
    };
}).sort((a,b)=> 
    {return performancePriority[b.performance] - performancePriority[a.performance];
    });

console.log(performance);


const hi =[

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }
];