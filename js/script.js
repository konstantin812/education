"use strict";

let numberOfFilms = +prompt('How many films you have watched yet?', '');
// console.log(lastWatchedFilm);
// console.log(numberOfFilms);
// console.log(typeof(numberOfFilms));

let personalMovieDB = {
     count : numberOfFilms,
     movies : {},
     actors : {},
     genres : [],
     privat : false
};

let lastWatchedFilm = prompt('What was the last film you watch?', '');
let filmScore = prompt('How can you score this film?', '');
let lastWatchedFilm1 = prompt('What was the last film you watch?', '');
let filmScore2 = prompt('How can you score this film?', '');

personalMovieDB.movies[lastWatchedFilm] = filmScore;
personalMovieDB.movies[lastWatchedFilm1] = filmScore2;



console.log(personalMovieDB);