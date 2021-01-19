'use strict';

const timerId = setTimeout(function (text) {
    console.log(text);
}, 10000, 'Hello'); // ms

setTimeout(function (text) {
    console.log(text);
}, 10000, 'Hello2'); // ms

function logger() {
    console.log('text');
}

const timerId2 = setTimeout(logger, 2000); // ms



clearInterval(timerId);


const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    //  const timerId = setTimeout(logger, 2000);
    const timerId = setInterval(logger, 2000);
});



let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500);


/// Animation

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation); // simple animation *deprecated