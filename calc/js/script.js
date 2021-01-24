'use strict';

const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest(); // not modern

    request.open('GET', 'js/current.json'); // собирает настройки. Аргументы:метод, путь, асинхронность(true), логин, пароль
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //1)
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = `something wrong - ${request.status}`;
        }
    });

//2)
    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = `something wrong - ${request.status}`;
        }
    });

    ////properties:
    //status
    //statusText
    //response
    //readyState


});