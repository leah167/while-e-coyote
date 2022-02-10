const prompt = require('prompt-sync')();

let n = Number(prompt('Enter a number: '));
let sum = 1
let sum2= 0

while (sum2 < 100) {
    let n2 = Number(n);
   
    sum2 = sum * n2
    sum++;

    console.log (sum2);

}

