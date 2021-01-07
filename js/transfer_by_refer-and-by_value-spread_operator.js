"use strict";

let a = 5,
    b = a;

b = b + 5; // change value

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // copy link at obj


copy.a = 10; // change value by link(refer)


console.log(copy);
console.log(obj);

//// Copy objects values to other(new) object 

function copyObject(mainObject) {
    let objCopy = {};

    for (const key in mainObject) {
        objCopy[key] = mainObject[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyObject(numbers);

newNumbers.a = 10;

console.log(numbers); // a == 2
console.log(newNumbers); // a == 10

newNumbers.c.x = 10;

console.log(newNumbers); // x == 10
console.log(numbers); // x == 10

/* Глубокие и поверхностные копии объектов. 
   При поверхностной вложенные объекты не копируются по значению, 
   а копируются по ссылке
 */

const add = {
    d: 17,
    e: 20
};

//// Method of combining two Objects 

console.log(Object.assign(numbers, add)); // независимая поверхностная копия

const clone = Object.assign({}, add); // method of clonning objects

clone.d = 20;

console.log(add); // d == 17
console.log(clone); // d == 20


//// ARRAYS COPPYING

const oldArray = ['a', 'b', 'c'];
const newArrayRefer = oldArray; // copy by refer (link)
const newArrayValue = oldArray.slice(); // copy values

//// NEW IN ES8-ES9 - SPREAD OPERATOR (оператор разворота)

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'fb']; // add all video + all blogs + vk + fb

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

}

const num = [2, 5, 7];

log(...num); // spread method

const array = ['a', 'b'];

const newArrray = [...array]; // coppying array by spread operator

const q = {
    one: 1,
    two: 2,
};

const newObj = {...q};