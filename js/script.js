" use strict";

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


for (let i=1; i<3; i++) {
     let a = prompt('What was the last film you watch?', ''),
         b = prompt('How can you score this film?', '');
         personalMovieDB.movies[a] = b;
}


// let a = prompt('What was the last film you watch?', '');
// let b = prompt('How can you score this film?', '');
// let c = prompt('What was the last film you watch?', '');
// let d = prompt('How can you score this film?', '');


// personalMovieDB.movies[c] = d;



console.log(personalMovieDB);