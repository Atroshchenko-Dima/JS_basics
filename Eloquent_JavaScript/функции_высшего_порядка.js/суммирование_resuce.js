// параметрами являются массив, комбинирующая функция и начальное значение

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)); 

// если массив содержит хоть один элемент, можно не указывать аргумент start

console.log([1, 2, 3, 4].reduce((a, b) => a + b)); 
