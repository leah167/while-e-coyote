const prompt = require('prompt-sync')();

let num = Number(prompt("Enter some numbers (type 'done' when complete): "));
let total = 0
// condition

while (num !== "done") {
    total = total + parseInt(num);
    num = prompt("> ");
//   if not using parseInt, 
// let num2 = Number(num)
// total = total + num2;
// num = prompt ("> ");
}

console.log("Your total is: " + total + ".");