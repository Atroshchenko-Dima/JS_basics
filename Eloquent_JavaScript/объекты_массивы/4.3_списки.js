/*Напишите функцию arrayToList, которая строит структуру списка, подобную той, что показана при
передаче [1, 2, 3]в качестве аргумента. Также напишите listToArray функцию, которая создает массив из списка.
Затем добавьте вспомогательную функцию prepend, которая принимает элемент и список и создает новый список, 
который добавляет элемент в начало входного списка, и nth которая принимает список и число и возвращает элемент
в заданной позиции в списке. (с нулем, относящимся к первому элементу) или undefined когда такого элемента нет.
Если вы еще этого не сделали, также напишите рекурсивную версию nth. */

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