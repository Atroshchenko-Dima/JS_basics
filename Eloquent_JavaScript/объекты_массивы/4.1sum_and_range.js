// создать функции range and sum

function range(start, end, step = end > start ? 1 : -1) {
    // const direction = end-start / Math.abs(end-start);
    let range = [];
    if (end > start) {
      for (let i = start; i <= end; i += step) {
        range.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        range.push(i);
      }
    }
  
    return range;
  }

console.log(range(1,10,2));
console.log(range(10,1));

///
function sum(listNumber) {
    let add = 0;
    for (let i = 0; i < listNumber.length; i++) {
        add += listNumber[i];
    }
    return add;
}
console.log(sum(range(1,10)));