const prompt = require('prompt-sync')();

let str = prompt('Enter a string: ');

let str2 = str
// set new string to equal first string as counter

console.log(str2)
//displays the string entered first everytime

// Enter a string and make it repeat until string lenght > 10
while (str.length < 10){
    // set increment as str becoming equal to itself plus str2
    str = str + str2;
    // displays new value for str while still meeting while loop conditions
    console.log(str);
} 

