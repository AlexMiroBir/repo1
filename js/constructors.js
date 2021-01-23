'use strict';


const num = new Number(3);
console.log(num);


function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function (name) {
    console.log(`User ${this.name} has gone away`);
}
const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);


ivan.exit();

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();