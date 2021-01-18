'use strict';



const btns = document.querySelectorAll('button'); // NodeList

//Properties:
console.log(btns[0].classList.length); // quantity of classes which have btns[0] 

// Methods:
console.log(btns[0].classList.item()); //   get class name with index in bckts

console.log(btns[0].classList.add()); //  add class(es) with thame in bckts
console.log(btns[0].classList.remove()); //  remove class(es) with thame in bckts

console.log(btns[0].classList.toggle()); //   if btn have class it will be removed, in another case it will be added

console.log(btns[0].classList.contains()); //   check would have class in bckts in btn (true/false)


btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) { // or toggle()
        btns[1].classList.add('red');
    } else {
        btns[1].classList.add('red');
    }
});

console.log(btns[0].className); // deprecated. return the all classes like one long string

//// Events delegation

const wrapper = document.querySelector('.button_block'); // NodeList

wrapper.addEventListener('click', (event) => { // this fragment delegate its clcik to child elements
    if (event.target && event.target.tagName == 'BUTTON') { // first event target check abilitty to be clicked
        console.log("hello");
    }
});


wrapper.addEventListener('click', (event) => { // this fragment delegate its clcik to child elements
    if (event.target && event.target.classList.contains('blue')) { // first event target check abilitty to be clicked
        console.log("hello");
    }
});


const btn = document.createElement('button');  // even if this elemen appears after Listener it anyway will work
btn.classList.add('red');
wrapper.append(btn);


// Если назнчить обработик событий всем элементам Листа, а потом создать новый элемент и поместить 
// его в Лист, то обработку событий он не наследует.

wrapper.addEventListener('click', (event) => { // this fragment delegate its clcik to child elements
    if (event.target && event.target.matches("button.red")) { // find matches with button with class red
        console.log("hello");
    }
});