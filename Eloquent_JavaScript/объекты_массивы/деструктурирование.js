const JOURNAL = require("./JOURNAL");

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
                  (table[0] + table[1]) *
                  (table[1] + table[3]) *
                  (table[0] + table[2])); 
}

console.log(phi([76, 9, 4, 1]));
      


// можем иметь отдельные переменные для элементов массива let n00 = table[0]. Получается более удобночитаемый код

function phi([n00, n01, n10, n11 ]) {
    return ([n11 * n00 - n10 * n01]) /
        Math.sqrt((n10 + n11) * (n00 + n01) *
                  (n01 + n11) * (n00 + n10));
}

console.log(phi([76, 9, 4, 1]));
      

// подобное работает и для оъектов

let {name} = {name: 'Фaраджи', age: 23};
console.log(name);