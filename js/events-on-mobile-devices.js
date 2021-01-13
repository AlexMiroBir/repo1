'use strict';

// no mouse events
// have 6 taps (touch events)

// 1 touchstart
// 2 touchmove
// 3 touchend
// 4 touchenter
// 5 touchleave
// 6 touchcancel

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');


    box.addEventListener('touchstart', (e) => { // only touch on mobile device
        e.preventDefault();
        console.log('start');
    });


    box.addEventListener('touchmove', (e) => { // зажать и двигать палец
        e.preventDefault();
        console.log('move');
    });

    box.addEventListener('touchend', (e) => { // на отрыв пальца =)
        e.preventDefault();
        console.log('move');
    });

    box.addEventListener('touchend', (e) => { // на отрыв пальца =)
        e.preventDefault();
        e.touches(); // TouchList
        e.targetTouches(); // TouchList
        console.log('move');
    });



// touches - list of fingers which using now
// targetTouches - list of fingers which use particular element
// changedTouches - list of fingers which was used




});