'use strict';

// To String

// 1)
console.log(typeof (String(null))); // string

// 2) concat
console.log(typeof (5 + '')); // string

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';


// To Number
// 1)
console.log(typeof (Number(null))); // number


//2) unar plus
console.log(typeof (+'5')); // number

// 3)
console.log(typeof (parseInt('15px', 10))); //number


// To boolean

// 0, '' , null, undefined, NaN  -- false

//1)

let switcher = null; // false

if (switcher) {
    console.log('it works'); // no
}

//2)

console.log(typeof (Boolean(null))); // Boolean 

// 3)

console.log(typeof (!!'44444')); // Boolean