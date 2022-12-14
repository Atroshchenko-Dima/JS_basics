/* Возможность функции принимать любое количество аргументов может быть полезной. Например, функция Math. max 
находит максимальный из всех переданных ей аргументов.Для того чтобы написать такую функцию, 
нужно поставить три точки перед ее последним параметром, например, так:*/

function max(...numbers) {
    let result = - Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

console.log(max(4, 1, 9, -2));


// когда вызывается такая функция, остаточный параметр привязывается к массиву, содержащему все остальные аргументы


let numbers = [5, 2, 7, 18];

// можно этот массив передать и с другими, аргументами 
console.log(max(100,...numbers, 14));

let words = ["никогда", "полностью"];
console.log(["я этого", ...words, "не пойму"]);


// Math.random возвращает случайное число от [0 до 1)

console.log(Math.random());

// Math.floor округляет число в меньшую сторону до ближайшего целого
// Math.ceil округляет в большую сторону
// Math.round округляет до ближайшего целого числа
// Math.abs - абсолютная величина

console.log(Math.floor(Math.random()*10));