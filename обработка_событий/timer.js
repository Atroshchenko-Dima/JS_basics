let bombTimer = setTimeout(() => { // setTimeout планирует выполнение другой функции, запущенной позже, через несколько мс
    console.log("BOOM!");
  }, 500);
  
  if (Math.random() < 0.5) { // 50% chance
    console.log("Defused.");
    clearTimeout(bombTimer); //Иногда бывает необходимо отменить уже запланированную функцию. Для этого нужно сохранить значение, возвращенное setТimeout, и вызвать clearTimeout для этого значения. 
  }

  /*Функция cancelAnimationFrame работает так же, как и clearTimeout, - вызов 
ее для значения, возвращаемого requestAnimationFrame, отменяет этот кадр 
анимации (при условии, что он еще не был вызван). 
Аналогичная пара функций, setinterval и clearinterval, используется для 
установки таймеров, выполнение которых должно повторяться каждые 
Х миллисекунд.*/

let ticks = 0;
let clock = setInterval(() => {
    console.log("tick", ticks++);
    if (ticks == 10) {
        clearInterval(clock);
        console.log("stop")
    }
}, 200);
