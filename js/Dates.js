'use strict';

const now = new Date(); /// 20.01.2021

const now1 = new Date('2020-01-20');

const now2 = new Date(2020, 1, 5, 20); // start from 0

const start = new Date(0); // 1970 

const beforeStart = new Date(-5000); //1969

// Methods
///// GETTERS:

console.log(now.getFullYear()); //2021
console.log(now.getMonth()); // 0 - january
console.log(now.getDate()); //20
console.log(now.getDay()); // 3 - wednesday
///// и так далее

console.log(now.getUTCHours());  // GMT
console.log(now.getTimezoneOffset()); // разница в минутах с GMT

console.log(now.getTime()); // ms since 1970 to now


/////SETTERS:

console.log(now.setHours(18)); // in console it is GMT time 
console.log(now);


let newStart = new Date();

for(let i =0; i<100000; i++){
    let dome = i**3;   // i^3   
}

let end = new Date();

let result = end - newStart;
console.log(result);  // 43-46 ms