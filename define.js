// if (true) {
//   let x = 10;
//   var y = 20;
// }
// console.log(y);
// console.log(x);

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

const {user,details,email}=profile
console.log(user.details.email);
console.log(user.details.phone);

const username ={
    name:null,
}

console.log(username.name?.name);