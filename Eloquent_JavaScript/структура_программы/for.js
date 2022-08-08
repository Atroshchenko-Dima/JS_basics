for (let number = 0; number <= 12; number += 2 ) {
    console.log(number)
}

let result = 1;
for (let counter = 0; counter < 10; counter += 1 ) {
    result *=  2 
}
console.log(result)

for (let current = 20; ; current += 1 ) {
    if (current % 7 == 0) {
        console.log(current);
        break
    }
}