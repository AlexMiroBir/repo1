"use strict";

let str = 'some';
let strObj = new String(str);

console.log(typeof (str)); // String
console.log(typeof (strObj)); // Object

console.dir([1, 2, 3]); // Array with 3 elements


const soldier = {
    health: 400,
    armor: 100
};


const john = {
    health: 100
};

// depricated variant
john.__proto__ = soldier;
//

console.log(john.armor); //100


// modern approaches

const bob = Object.create(soldier); // create new
Object.setPrototypeOf(john,soldier);  // set exists
console.log(Object.getPrototypeOf(john)); // soldier {...}