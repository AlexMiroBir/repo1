"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < numberOfFilms ; i++) {
    const oneOfFilms = prompt("Один из последних фильмов?", "");
    const grade = prompt("На сколько оцените его?", "");

    personalMovieDB.movies[oneOfFilms] = grade;
}



console.log(personalMovieDB);