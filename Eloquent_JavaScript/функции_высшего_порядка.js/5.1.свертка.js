/*Используйте этот reduceметод в сочетании с concat методом, чтобы «свести» массив массивов в один массив, 
содержащий все элементы исходных массивов.*/

var arrays = [[1, 2, 3], [4,5], [6]];

var array = arrays.reduce(function(previousArray, currentArray) {
    return previousArray.concat(currentArray);
});

console.log(array);
