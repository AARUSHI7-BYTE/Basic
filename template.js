const short = (name, age) => ({
    name,
    age,
    greet: () => {
        console.log("Hello");
    }
});
const student = short("Sam", 21);
student.greet();

const username = "Raj";
const course = "Js";
const welcomemessage = (username, course) => {
    return `Hello ${username} ,welcome to the ${course}!`;
};
console.log(welcomemessage(username, course));

const getfullname = (firstname, lastname) => {
    return `${firstname} ${lastname}`;
}
console.log(getfullname("Raj", "Sharma"));