"use strict";


// Callback function sets the order of call functions

function learnJS(lang, callback) {
    console.log(`я учу: ${lang}`);
    setTimeout( // Timeout before console.log 1000=1s
        callback, 1000);
}

function done() {
    console.log('Я прошёл этот урок!');
}

learnJS('JavaScript', done);