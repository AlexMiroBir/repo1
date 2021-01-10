'use strict';

let x = 5;
console.log(x++); //?


console.log([] + false - null + true); //?

/*
1)  [] + false - string "false"
2)  'false - null - NaN'
3)   NaN + true - NaN
*/

let y = 1;
let z = y = 2;
console.log(z);

console.log([] + 1 + 2); // ?


console.log('1' [0]); //?

console.log(2 && 1 && null && 0 && undefined); //,

/*
"оператор И запинается на лжи"
"оператор или запинается на правде"
*/

console.log(!!(1 && 2) === (1 && 2));   //?
console.log(!!(1 && 2));   //?
console.log(1 && 2);   //?


console.log( null || 2 && 3 || 4 ); // ?

// 1)  &&
// 2) ||


///•	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? 

console.log( +"Infinity" );  //?

console.log("Ёжик" > "яблоко" );  // ?

console.log(0 || "" || 2 || undefined || true || falsе); //?