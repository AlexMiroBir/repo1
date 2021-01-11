'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'), // pseudoArray
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'), // NodeList has foreach
    wrapper = document.querySelector('.wrapper');

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

console.dir(box); // == object

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color:blue; width:500px'; // with ${}


btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

hearts.forEach(item => {
    console.log(item);
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('Hello');

div.classList.add('black');

document.body.append(div); // to end
wrapper.append(div);

wrapper.prepend(div); // to start

hearts[0].before(div); // before first .heart

circles[0].remove(); // remove item

hearts[0].replaceWith(circles[0]); // replace items]

wrapper.appendChild(div); // div to wrapper

wrapper.insertBefore(div.hearts[1]); // div before hearts1

wrapper.removeChild(hearts[1]); // heart1 delete in wrapper

wrapper.replaceChild(circles[0], hearts[0]);  // replace (old)

div.innerHTML = '<h1>Hello World</h1>';

div.textContent = 'Hello'; // only text without tags


div.insertAdjacentHTML("afterbegin",'<h2>Hello</h2>'); // inser h2

