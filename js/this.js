'use strict';

function showThis(a, b) {
    console.log(this); // without strict = window, with strct - undefined
    function sum() {
        console.log(this);
        return a + b;

    }
    console.log(sum());
}

showThis(4, 5);

const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);

        function shout() {
            console.log(this);
        }
        shout(); // undefined контекст вызова потерян
    }
};

obj.sum(); //  obj

function User(name, id) { // constructor function
    this.name = name;
    this.id = id;
    this.human = true;
}
let ivan = new User('Ivan', 23);


function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith'); // установка контекста
sayName.apply(user, ['Smith']); // установка контекста

sayName(); // undefined


function count(num) {
    return this * num;
}

const double = count.bind(2); // 2 бедет всегда как this у count


console.log(double(3));


// 1) обычная функция: this = window, но если use strict - undefined 
// 2) Контекст у методов объекта = сам объект
// 3) this в конструкторах и классах это новый экземпляр объекта
// 4) РУчная привязка this: callm apply, bind;

//examples

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    console.log(this); // <button></button>
    this.style.backgroundColor = 'red'; // цвет кнопки станет красным
});

btn.addEventListener('click', () => {
    console.log(this); // undefined - контекст вызовы потерян
    this.style.backgroundColor = 'red'; // bgC undefined
});

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red'; // цвет кнопки станет красным
});

const obj1 = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
        };
        say();
    }
};

obj1.sayNumber(); /// obj1 так как, без своего контекста, возьмет контект родителя


const double1 = (a) => a * 2;
const double2 = a => a * 2;