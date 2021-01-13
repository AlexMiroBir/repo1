'use strict';

// we have to create event handler

const btn = document.querySelector('button');

btn.onclick = function () { // has a problem, if you create second onclick, this will be override

    alert('Click');

};


/// will be work the both of them:

btn.addEventListener('click', function () {
    alert('Click');
});

btn.addEventListener('click', () => {
    alert('Second click');
});

/////////////////////////////

/// HOVER

btn.addEventListener('mouseenter', () => {
    console.log('Hover');
});

// with event

btn.addEventListener('mouseenter', (event) => {
    console.log(event);
    console.log('Hover');
});

btn.addEventListener('mouseenter', (event) => {
    console.log(event.target); // target is object e.g. <button>...</button>
    event.target.remove();
    console.log('Hover');
});


const deleteElement = (e) => {
    e.target.remove();
};

btn.addEventListener('click', deleteElement);
btn.removeEventListener('click', deleteElement);

const overlay = document.querySelector(".overlay");

const deleteElement2 = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
};

overlay.addEventListener('click', deleteElement);

// ВСПЛЫТИЕ СОБЫТИЙ
// если событие задано родительскому и вложенному элементу, 
// сначала обрабатывается событие вложенного!


const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); // отмена стандартного поведения (cancel default behavior)
    console.log(event.target); // <a>...</a>

});

// чтобы назначить обработчик событий на несколько элементов лучше
// всего использовать forech на псевдомассие querySelectorAll

link.addEventListener('click', (event) => {
    console.log('smth');
}, {
    once: true
}); // событие будет прооизведено лишь раз