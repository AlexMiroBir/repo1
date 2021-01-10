"use strict";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {

        for (let i = 0; i < this.count; i++) {
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
    },
    detectedPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= this.count; i++) {
            const answer = prompt(`Ваш любимый жанр под номером ${i}`);
            if (answer != "" && answer != null && isNaN(answer)) {
                personalMovieDB.genres[i - 1] = answer;
            } else {
                i--;
            }
        }
        let i = 0;
        this.genres.forEach(element => {
            i++;
            console.log(`Любимый жанр #${i} - это ${element}`);


        });
    },
    showMyDB: function () {
        if (!this.privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        this.privat = this.privat == true ? false : true;
    }

};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectedPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();