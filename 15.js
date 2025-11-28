let timeLeft = 10;

console.log(`Countdown starts for ${timeLeft} seconds...`);
console.log(`Press "s" to stop the countdown.`);

let intervalId = setInterval(() => {
    console.log(timeLeft);
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(intervalId);
        console.log("Countdown Complete!");
    }
}, 1000);

function checkStopKey() {
    process.stdin.setRawMode(true);
    process.stdin.resume();

    process.stdin.once("data", (data) => {
        if (data.toString() === "s") {
            clearInterval(intervalId);
            console.log("Countdown Stopped by User!");
        } else {
            setTimeout(checkStopKey, 100);
        }
    });
}

setTimeout(checkStopKey, 100);