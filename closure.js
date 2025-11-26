let age = 19;
function displayAge(){
    console.log(age);
}
function changeAge(){
        let age=20;
        console.log(age);
    }
displayAge();
changeAge();


//20
let count =0;
function createCounter(){
    function increment(){
        count++;
        console.log(count);
    }
    function decrement(){
        count--;
        console.log(count);
    }
    return {increment,decrement};
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();

function createBankAccount() {
    let balance = 0; // private variable

    function deposit(amount) {
        balance += amount;
        console.log(`Deposited: ${amount}`);
    }

    function withdraw(amount) {
        if (amount > balance) {
            console.log("Insufficient balance");
        } else {
            balance -= amount;
            console.log(`Withdrawn: ${amount}`);
        }
    }

    function getBalance() {
        return balance;  // controlled access
    }

    return { deposit, withdraw, getBalance };
}

const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
console.log(account.balance); 
console.log(account.getBalance());