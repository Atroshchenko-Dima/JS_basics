// рекурсивная функция — это просто функция, которая вызывает сама себя внутри себя, создавая своего рода «цикл»

function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    }   else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2,5));

/*
[2*(2,4)]
2*[2*(2,3)]
2*2*[2*(2,2)]
2*2*2*[2*(2,1)]
2*2*2*2*[2*(2,0)]
2*2*2*2*2*1 = 32 */



/* Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, 
an infinite set of numbers can be produced. How would you write a function that, given a number, 
tries to find a sequence of such additions and multiplications that produces that number? */

function findSolution(target) {
    function find(current, history) { // принимает текущее число и строку, в которой записано, как число было получено
      if (current == target) { 
        return history; // Если находит число, возвращает строку, где показано, как можно достичь заданной цели
      } else if (current > target) { // Если решения для заданного числа не найдено, то выводит null
        return null; 
      } else {
        return find(current + 5, `(${history} + 5)`) ||
               find(current * 3, `(${history} * 3)`);
      }
    }
    return find(1, "1"); // начинаем с числа 1
  }
  
  console.log(findSolution(24));
