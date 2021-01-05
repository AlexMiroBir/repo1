"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {

    for (let i = 0; i < numberOfFilms; i++) {
        const oneOfFilms = prompt("Один из последних фильмов?", "");
        const grade = +prompt("На сколько оцените его?", "");
        if (oneOfFilms != "" &&
            oneOfFilms != null &&
            grade != "" &&
            grade != null &&
            oneOfFilms.length < 50) {
            personalMovieDB.movies[oneOfFilms] = grade;
        } else {
            i--;
            alert("ошибка ввода, повторите ввод");
        }

    }
}

rememberMyFilms();

function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectedPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const answer = prompt(`Ваш любимый жанр по номером ${i}`);
        if (answer != "" && answer != null && isNaN(answer)) {
            personalMovieDB.genres[i - 1] = answer;
        } else {
            i--;
        }
    }
}

writeYourGenres();

function showMyDB(hidden) {   
    if (!hidden) {
        console.log(personalMovieDB);
    }
}


showMyDB(personalMovieDB.privat);