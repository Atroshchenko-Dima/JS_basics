function minus(a, b) {
    if (b == undefined) return -a;
    else return a - b;
}

console.log(minus(10));

function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(2,6));