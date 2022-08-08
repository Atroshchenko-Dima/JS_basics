// Принимает массив и создает новый массив возвращая в обратном порядке

function reverseArray(arr) {
    let newArr =[];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    return newArr;
}

console.log(reverseArray([1,2,3]));

// или
function reverseArray2(array) {
    var output = [];
    for (var i = array.length - 1; i >= 0; i--)
      output.push(array[i]);
    return output;
  }

console.log(reverseArray2([1,2,3]));

// Принимает массив и возвращает в обратном порядке

var reverseArrayInPlace = function(array) {
    for (var i = 0; i < Math.floor(array.length/2); i++) { // цикл по массиву от начала до конца
      var mirror = (array.length - 1) - i; // удерживать индекс зеркального отображения текущего элемента (первый/последний, второй/предпоследний и т. д.)
      var current = array[i]; // удерживать текущий элемент 
      array[i] = array[mirror]; // заменить текущий элемент его зеркальным отображением
      array[mirror] = current; // заменить зеркальное изображение текущим элементом
    }
  
    return array;
  };
  
console.log(reverseArray(["A", "B", "C"])); // prints ["C", "B", "A"]
console.log(reverseArrayInPlace([1, 2, 3, 4, 5])); // prints [5, 4, 3, 2, 1]