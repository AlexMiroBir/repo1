"use strict";

// GLOBAL VARIABLES
let num = 10;
const num1 = 20;
var num2 = 30;

// FUNCTIONS DECLARATION

function showMessage(text) {
    console.log(text);
}

function ret() {
    let num = 50;
    return num;
}
//////////////////////
// FUNCTION EXPRESSION

const sayHello = function () {
    console.log("Hello");
};

const sayHelloReturn = function () {
    return "Hello";
};
////////////////////
// ARROWS FUNCTIONS

const calc = (a, b) => {
    return a + b;
};

const calc1 = (a,b) => a+b;

const calc2 = a => a;