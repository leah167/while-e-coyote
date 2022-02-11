const prompt = require('prompt-sync')();

let n = Number(prompt('Enter a number: '));

while (n < 100) {
    
    n*=2;
    console.log (n);

}

