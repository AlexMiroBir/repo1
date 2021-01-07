"use strict";

const arr = [1, 2, 3, 4, 5, 6];

arr.pop(); // delete last element and return this
arr.push(7); // add last element
arr.shift(); // delete first element
arr.unshift(0); // add element in first position;
arr.split(","); // convert string to array;
arr.join(","); // convert array to string;
delete arr[1]; // delete second elemebt from array
arr.splice(0, 5, 3); // delete 5 elements starting from 0 and chang them to 3
arr.slice(0, 5); // copy part of array from 0 to 5(not include) indexes
arr.sort(); // array sort , you can add sort function between bkts
arr.reverse(); // change elements order in the array;
arr.concat(10); // create new array with copying elements + 10;


//// console log array elements

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


//// for of (can use break and continue)
for (let value of arr) {
    console.log(value);
}

//// for each (with callback)

arr.forEach(function (item, orderNumber, arr) {
    console.log(`${orderNumber}: ${item} внутри массива ${arr}`)
});

/// Transformation methods

arr.map(); //Метод «arr.map(callback[, thisArg])» используется для трансформации массива. Он создаёт новый массив, который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента arr.
arr.every(); // Метод «arr.every(callback[, thisArg])» возвращает true, если вызов callback вернёт true для каждого элемента arr.
arr.some(); // Метод «arr.some(callback[, thisArg])» возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.
arr.filter(); // Метод «arr.filter(callback[, thisArg])» используется для фильтрации массива через функцию.Он создаёт новый массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) возвратит true.
arr.reduce();

/*

Метод «arr.reduce(callback[, initialValue])» используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата.

Это один из самых сложных методов для работы с массивами. Но его стоит освоить, потому что временами с его помощью можно в несколько строк решить задачу, которая иначе потребовала бы в разы больше места и времени.

Метод reduce используется для вычисления на основе массива какого-либо единого значения, иначе говорят «для свёртки массива». Чуть далее мы разберём пример для вычисления суммы.

Он применяет функцию callback по очереди к каждому элементу массива слева направо, сохраняя при этом промежуточный результат.

Аргументы функции callback(previousValue, currentItem, index, arr):

previousValue – последний результат вызова функции, он же «промежуточный результат».
currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
index – номер текущего элемента.
arr – обрабатываемый массив.
Кроме callback, методу можно передать «начальное значение» – аргумент initialValue. Если он есть, то на первом вызове значение previousValue будет равно initialValue, а если у reduce нет второго аргумента, то оно равно первому элементу массива, а перебор начинается со второго.*/



//// PSEUDO ARRAYS

// they look like arrays but don't have methods