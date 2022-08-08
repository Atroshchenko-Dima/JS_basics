// Write a function min that takes two arguments and returns their minimum.

function min (arg1, arg2) {
    console.log(Math.min(arg1,arg2));
}

min(20,7);

/* Как мы видели, оператор% (оператор остатка) можно применять для проверки, является число четным или нечетным. Для этого нужно использовать 
%2, чтобы узнать, делится ли оно на два. Вот еще один способ определить, 
является ли положительное целое число четным или нечетным: 
- ноль четный; 
- единица нечетная; 
- четность любого другого числа N совпадает с четностью N - 2. 
Определите рекурсивную функцию isEven, соответствующую этому описанию. Функция должна принимать один параметр (положительное целое 
число) и возвращать логическое значение. 
Проверьте эту функцию на числах 50 и 75. Посмотрите, как она ведет себя 
для -1. Можете ли вы придумать способ, как это исправить? */

function isEven(number) {
    if (number == 0) {
        return 'четное';
    } else if (number == 1) {
        return 'нечетное';
    } else if (number < 0) {
        return isEven(-number)
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-2));

/* Write a function countBs that takes a string as its only argument and returns a number 
that indicates how many uppercase “B” characters there are in the string.
Next, write a function called countChar that behaves like countBs, except it takes a second argument that 
indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function. */

function countBs(string) {
    var count = 0; 
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "B")
        count += 1;
    }
    return count;
  }

console.log(countBs("BBBC"));

function countChar(string, char) {
    var count = 0; 
    for (let i = 0; i < string.length; i++) {
      if (string[i] === char)
        count += 1;
    }
    return count;
  }

  function countBs(string) {
    return countChar(string, "B");
 }

console.log(countBs("BBBC"));