'use strict';

const box = document.querySelector('.box');

const width = box.clientWidth; // in px withoud borders without scroll line
const height = box.clientHeight;


const newWidth = box.offsetWidth; // in px withoud borders with scroll line
const newHeight = box.offsetHeight;

box.getBoundingClientRect(); // get coordinates from left-top corner
console.log(box.getBoundingClientRect().top); // get top coordinates 


// get styles from css

const style = window.getComputedStyle(box); // withpu inline styles (not changeble)


