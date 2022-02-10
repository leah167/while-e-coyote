const prompt = require('prompt-sync')();

let n = Number(prompt('Enter a number: '));
let n1 = 0
let n2 = 1

while (n > 0) {
    let sum = n1 + n2;

    n1 = n2;
    n2 = sum;

    n = n - 1;

}

console.log(sum)