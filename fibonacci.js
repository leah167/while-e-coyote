const prompt = require('prompt-sync')();

let n = Number(prompt('Enter a number: '));

// Make three variables and set as the first three values of fib sequence.
let x = 0
let y = 1
let z = 1

// Make a counter to compare to n 
let counter = 0


// if counter is less than n, display x (0) and add one to counter
if (counter < n) {
    console.log(x)
    counter++;
}
// if counter is still less than n, display x and y (0 and 1) and add one to counter
if (counter < n) {
    console.log(y)
    counter++;
}
// Run while loop if condition for counter being less than n is still met (n is a value of 3 greater).
while (counter < n) {
    // display third value of fib sequence.
    console.log(z);

    // x will now = y in this loop
    x = y;
    // y will now = z in this loop
    y = z;
    // z will now = the sum of x and y
    z = x + y;

    counter++;

}
// if n=1, just the first if statement will display (0)
// if n= 2, the first and second if statements will display (0, 1)
// if n is equal to 3 or greater it runs the while loop
// x, y, z will change values every time the while loop runs (when counter is still greater than n).
// ex: first loop: x=y (1=1), y=z (1=1), z=x+y (2 = 1 + 1) console displays 0, 1, 1, 2
// second loop: x=y (1=1), y=z (2=2), z=x+y (3=1+2) console displays 0, 1, 1, 2, 3