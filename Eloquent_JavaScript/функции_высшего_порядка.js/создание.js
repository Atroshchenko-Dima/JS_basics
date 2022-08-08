function repeat(n, action) {
    for (i=0; i < n; i++) {
        action(i);
    }
}

repeat(10,console.log);

// мы не обзаны передавать в repeat заранее определенную функцию. Часто вместо этого проще создать функциональное значение в вызове

let labels = [];
repeat(5, i => {
    labels.push(`Блок ${i + 1}`);
});

console.log(labels)

// существуют функции которые создают новые функции

function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);

console.log(greaterThan10(11));

// существуют функции которые изменяют другие функции

function noise(f) {
    return(...args) => {
        console.log('вызов для', args);
        let result = f(...args);
        console.log('Вызов для', args, 'возвращает', result);
        return result;
    };
}

noise(Math.min)(3,2,1);


// функции создающие новые типы последовательности выполнения

function unless(test, then) {
    if (!test) then();
}
repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, " - четное число")
    })
})



