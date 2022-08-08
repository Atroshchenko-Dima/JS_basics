let doh = "Эгегей";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());
console.log(doh.toLowerCase());

// добавление/удаление в конец массива

let sequence = [1, 2, 3];
sequence.push(4,5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

// добавление/удаление в начало массива

let todoList =[];

// добавить задачу в конец очереди
function remember(task) {
    todoList.push(task);
}

// удалить первый элемент из очереди
function getTask() {
    return todoList.shift();
}

// добавить задачу в начало очереди
function rememberUrgently(task) {
    todoList.unshift(task);
}

remember("купить продукты");
rememberUrgently("купить молоко");
console.log(todoList)

/// 

// Просматривает массив от начала до конца и возвращает индекс, по которому было найденно заданное значение
console.log([1, 2, 3, 2, 1].indexOf(2));
// Просматривает массив от конца к началу и возвращает индекс, по которому было найденно заданное значение
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

// indexOf и lastIndexOf имеют необязательный 2й аргумент, который указывает, откуда начать поиск

/* Принимает начальный и конечный индексы и возвращает массив, содержащий только элементы, 
расположенные между ними, включая начальный, но исключая конечный */
console.log([0, 1, 2, 3, 4].slice(2,4));

// если конечный индекс не задан, то возвращает все элементы идущие после начального
console.log([0, 1, 2, 3, 4].slice(2));


// С помощью метода concat можно склеивать массивы чтоб получить новый


/* Функция принимает массив и индекс и возвращает новый массив, являющийся копией исходного массива, 
из которого удален элемент, расположенный по указанному индексу */
function remove(array, index) {
    return array.slice(0, index)
        .concat(array.slice(index + 1));
}

/* Если передать функции concat аргумент, который не является массивом, значение будет добавлено в новый массив,
как если бы это был массив из одного эллемента*/

console.log(remove(['a', 'b', 'c', 'd', 'e'], 2));