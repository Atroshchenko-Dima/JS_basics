/*Аналогично some методу массивы также имеют every метод. Этот возвращает true, когда данная функция возвращает
true для каждого элемента массива. В некотором смысле some это версия || оператора, которая действует на
массивы и every похожа на && оператор.

Реализовать every как функцию, которая принимает массив и функцию-предикат в качестве параметров.
Напишите две версии, одну с использованием цикла и одну с использованием some метода.*/

function every(array, test) {
    for (let i = 0; i < array.length; i++) {
      if (!test(array[i])) return false;
    }
    return true;
}
  
function every2(array, test) {
  return !array.some(elt => !test(elt));
}
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every2([2, 4, 16], n => n < 10));
  // → false
  console.log(every2([], n => n < 10))