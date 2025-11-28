function displayMessage(name){
    console.log("Hello "+ name +"!");
}

function getUserInput(callback){
    setTimeout(()=>{
        let username="Alice";
        callback(username);
    },1000);
}

getUserInput(displayMessage);

//12 ques
function timer(duration, onComplete){
    setTimeout(()=>{
        onComplete(`Timer of ${duration} ms finished`);
    },duration);

}

timer(2000, (message) => {
  console.log(message);
});