"use strict";

/// New objects

const obj = new Object();

const options = {

    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    }
};

console.log(options.name);

//// Delete object proper

delete options.name;

console.log(options.name);

console.log(options);



//// For in

for (let key in options) {
    if (typeof (options[key]) == 'object') {
        for (const i in options[key]) {
            console.log(`свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`свойство ${key} имеет значение ${options[key]}`);
    }
}


console.log(Object.keys(options)); // all keys in the object

console.log(Object.keys(options).length); // number of keys in the object



options.makeTest();

//// Destructions

const {
    border,
    bg
} = options.colors;
console.log(border);