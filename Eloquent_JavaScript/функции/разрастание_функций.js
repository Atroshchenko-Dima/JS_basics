function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = '0' + cowString; // нули добавляются до тех пор, пока числовая строка не станет минимум 3 символа
    }
    console.log(`${cowString} коров`) // используются обратные ковычки
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = '0' + chickenString;
    }
    console.log(`${chickenString} цыплят`);
}
printFarmInventory(7,11); 

//  добавим к этой функции еще свиней, чтобы не было много повторений в коде, представлю в виде функции отдельную концепцию

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = '0' + string; // нули добавляются до тех пор, пока числовая строка не станет минимум width символов
    }
    return string;
}

function printFarmInventory2(cows2, chickens2, pigs){
    console.log(`\n${zeroPad(cows2, 3)} коров`)
    console.log(`${zeroPad(chickens2, 3)} куриц`)
    console.log(`${zeroPad(pigs, 3)} свиней`)
}

printFarmInventory2(7, 124, 16);