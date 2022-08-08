// создать функции range and sum

function range(start, end, step = end > start ? 1 : -1) {
    // const direction = end-start / Math.abs(end-start);
    let range = [];
    if (end > start) {
      for (let i = start; i <= end; i += step) {
        range.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        range.push(i);
      }
    }
  
    return range;
  }

console.log(range(1,10,2));
console.log(range(10,1));

///
function sum(listNumber) {
    let add = 0;
    for (let i = 0; i < listNumber.length; i++) {
        add += listNumber[i];
    }
    return add;
}
console.log(sum(range(1,10)));

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

/* 4.3. A list
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
Write a function arrayToList that builds up a linked list like the one above when given [1, 2, 3] as an argument,
and write a listToArray function that produces an array from a list. Also write the helper functions prepend, 
which takes an element and a list and creates a new list that adds the element to the front of the input list, 
and nth, which takes a list and a number and returns the element at the given position in the list, or 
undefined when there is no such element.
If you haven’t already, also write a recursive version of nth. */

function arrayToList(array) { 
  var list = null; // потому что конец связанного списка равен нулю
  
  for (var i = array.length - 1; i >= 0; i--) { // Составление списка легче, если делать это в обратном порядке
      var node = { // создает временный узел для хранения части списка, построенного до сих пор
          value: array[i], 
          rest: list 
      };
      
      list = node; //временный узел теперь является головным узлом списка
  }
  
  return list;
}

function listToArray(list) {
  var array = [];
  /* Каждая итерация цикла node указывает на текущий подсписок, и тело может прочитать его value свойство, 
  чтобы получить текущий элемент. В конце итерации node переходит к следующему подсписку. 
  Когда это значение равно нулю, мы достигли конца списка, и цикл завершен */
  for (var node = list; node; node = node.rest) { 
      array.push(node.value); 
  }
  
  return array;
}
// принимает элемент и список, и создает новый список, в котором заданный элемент добавлен в начало исходного списка
function prepend(value, list) {
  return {value: value, rest: list}
}

function nth(list, n) {
  if (n === 0) return list.value;
  if (list.rest != null) return nth(list.rest, n - 1);
  return undefined;
}

// recursive version of nth
function r_nth(list, n) {
  if (!list) {
    return undefined;
  } else if (n === 0) {
      return list.value;
  } else {
    return r_nth(list.rest, n - 1); // уменьшает «хвост» списка, считая в обратном порядке, пока n не достигнет нуля
  }
}

console.log(arrayToList([10, 20, 30])); // prints {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}}
console.log(listToArray(arrayToList([10, 20, 30]))); // prints [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1)); // prints 20
console.log(r_nth(arrayToList([10, 20, 30]), 1)); // prints 20