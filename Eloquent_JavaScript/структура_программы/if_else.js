const prompt = require('prompt-sync')();
let theNumber = Number(prompt("Введите число: "));
if (!Number .isNaN(theNumber)) {
    console.log("Это число является квадратным корнем числа " + theNumber * theNumber);
}
else {
    console.log("Эй, почему вы не ввели число?")
}

let num = Number(prompt("Введите число: "));

if (num < 10) {
    console.log('Маленькое');
}   else if (num < 100) {
    console.log('Среднее');
}   else {
    console.log ('Большое');
}