// JSON.stringify - принимает значение JS и вовзращает строку в формате JSON

let string = JSON.stringify({squirell: false,
                             events: ["выходной"]});
console.log(string);

// Берет эту строку и преобразует ее в значение, которое было закодировано в этой строке
console.log(JSON.parse(string).events);