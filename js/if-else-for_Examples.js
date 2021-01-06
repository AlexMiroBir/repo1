"use strict";


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < numberOfFilms; i++) {
    const oneOfFilms = prompt("Один из последних фильмов?", "");
    const grade = prompt("На сколько оцените его?", "");
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

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}


console.log(personalMovieDB);