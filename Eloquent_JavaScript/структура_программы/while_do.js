let number = 0;
while (number < 12) {
    console.log(number);
    number += 2;
}


let result = 1;
let counter = 0;
while (counter < 10) {
    result *= 2;
    counter += 1;
}
console.log(result);


const prompt = require('prompt-sync')();
let yourName;
do {
    yourName = prompt("Кто вы? ");
} while (!yourName);
console.log(yourName)
