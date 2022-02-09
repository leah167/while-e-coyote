const prompt = require('prompt-sync')();

let num = Number(prompt("Enter some numbers (type 'done' when complete): "));
let total = 0
// condition

while (num !== "done") {
    // input numbers
    total = total + parseInt(num);
    num = prompt("> ");
  
}

console.log("Your total is: " + total + ".");