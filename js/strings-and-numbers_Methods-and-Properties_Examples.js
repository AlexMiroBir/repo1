"use strict";

const str = "test"; // UNMUTABLE
const arr = [1, 2, 4];

////
// https://developer.mozilla.org/ru/docs/Web/JavaScript/reference/global_objects/string
////

// PROPERTIES 

console.log(str.length);
console.log(arr.length);

console.log(str[2]);

//// METHODS
// STRINGS

console.log(str.toUpperCase()); // TEST
console.log(str.toLocaleLowerCase()); // test
console.log(str.indexOf("s")); // 2 
console.log(str.indexOf("o")); // -1
console.log(str.slice(1, str.length - 1)); // es
console.log(str.slice(-3, -1)); // es
console.log(str.substring(1, str.length - 1)); // es
console.log(str.substr(1, 2)); // es   (start,length)

//NUMBERS

const num = 12.2;
console.log(Math.round(num)); // 12

const test = "12.2px";
console.log(parseInt(test)); // 12
console.log(parseFloat(test)); //12.2