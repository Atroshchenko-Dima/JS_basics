let day1 = {
    squirrel: false,
    events: ["работал", "трогал дерево", "ел пиццу", "бегал"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

///

let anObject = {left: 1, right: 3};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log('left' in anObject);

///

console.log(Object.keys({x: 0, y: 2, z: 4}));

///

let objectA = {a: 1, b: 3};
Object.assign(objectA, {b:4, c: 6});
console.log(objectA);

///

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
console.log(object2 == object3);

object1.value =  15
console.log(object2.value);
console.log(object3.value);

