const prompt = require('prompt-sync')();

let x = Number(prompt('Enter the first number: '));
let y = Number(prompt('Enter the second number: '));

// add one to x until divisible by y
// x++;
// while (x % y !== 0) remainder of x divded by y cannot = 0

while (x % y !== 0) {
    x++;
}

console.log("The answer: " + x + " is divisble by " + y + ".")