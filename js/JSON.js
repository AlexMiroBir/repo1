'use strict';

const person = {
    name: 'Alex',
    tel: '+755555555',
    parents: {
        mom: 'Mom',
        dad: 'Dad'
    }
};


//console.log(JSON.stringify(person));
//console.log(JSON.parse(JSON.stringify(person)));

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);