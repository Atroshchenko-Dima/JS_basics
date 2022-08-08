const square = function(x) {
    return x * x; 
};

console.log(square(15));

// или
function sq(x) {
    return x * x; 
};

console.log(sq(15));

const power = function(base, exponent) {
    let result = 1;
    for (count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2,10));

