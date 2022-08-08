/*Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если они имеют одно
и то же значение или являются объектами с одинаковыми свойствами, где значения свойств равны по сравнению
с рекурсивным вызовом deepEqual.*/

function deepEqual(a, b) {
    if (a === b) { 
      return true;
    } else if ((typeof a && typeof b == "object") && (a && b != null)) { // если оба аргумента являются реальными объектами
      if (Object.keys(a).length == Object.keys(b).length) { // если оба объекта имеют одинаковое количество свойств(Object.keys - для перебора и сравнения свойств объекта)
        for (var key in a) { // цикл по ключам одного объекта  
          if (key in b) { // если у другого объекта тоже есть ключ
              return deepEqual(a[key], b[key]); // сравнить значения ключей
          }
        }
      } 
    } 
    else {
      return false;
    }
  }

  
var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj)); // prints true
console.log(deepEqual(obj, {here: 1, object: 2})); // prints false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // prints true
console.log(deepEqual(obj, {here: null, object: 2})); // prints false  