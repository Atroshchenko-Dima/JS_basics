/* Основная идея ООП состоит в том, чтобы разделить программу на более мелкие части, и сделать так, чтобы каждая
из них отвечала за управление своим состоянием */ 

// Отделение интерфейса от реализации - инкапсуляция

let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");

/*Обычно метод должен что-то сделать с объектом, для которого он был вызван. Когда функция вызывается 
как метод — просматривается как свойство и немедленно вызывается, как в object.method()— привязка, 
вызываемая thisв ее теле, автоматически указывает на объект, для которого она была вызвана. */

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
  let whiteRabbit = {type: "white", speak};
  let hungryRabbit = {type: "hungry", speak};
  
  whiteRabbit.speak("Oh my ears and whiskers, " +
                    "how late it's getting!");
  // → The white rabbit says 'Oh my ears and whiskers, how
  //   late it's getting!'
  hungryRabbit.speak("I could use a carrot right now.");
  // → The hungry rabbit says 'I could use a carrot right now.'
  speak.call(whiteRabbit, 'Я объелся');