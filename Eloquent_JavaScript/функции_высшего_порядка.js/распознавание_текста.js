const SCRIPTS = require("./SCRIPTS");

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
}
  
console.log(characterScript(121));

/* подсчитать колличество символов, принадлежащих каждому шрифту
Функция countBy принимает на вход коллекцию (все, что мы можем перебрать с помощью for/ of) и функцию, 
которая вычисляет имя группы для данного элемента. Функция возвращает массив объектов, каждый из которых
называет группу и сообщает вам количество элементов, найденных в этой группе.
Он использует другой метод массива — findIndex. Этот метод чем-то похож на indexOf, но вместо того, 
чтобы искать конкретное значение, он находит первое значение, для которого данная функция возвращает 
значение true. Как и indexOf, он возвращает -1, когда такой элемент не найден.*/

function countBy (items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1})
        } else {
            counts[known].count++;
        }
    }
    return counts;
}
console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// можем написать функцию, которая сообщает какие шрифты были задейсвованны в тексте

function textScripts(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0)); // подсчитывает символы по имени шрифта, чтоб назначить имя
      return script ? script.name : "none"; // и возвращает строку none для символов которые не относятся к шрифтам
    }).filter(({name}) => name != "none"); // filter удаляет none из массива, т.к нас они не интересуют
 
    // вычисляет общее кол-во символов принадлежащих шрифту, если такие символы не найдены, то возвращает конкретную строку
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
    // вычисляет процентное соотношение каждого шрифта и преобразует в удобный вид
    return scripts.map(({name, count}) => {
      return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}
  
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
 

 // → 61% хань, 22% латиница, 17% кириллица

