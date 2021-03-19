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
     let a = prompt('What was the last film you watch?', '');
          if (a == false || a.length > 50 || a.length == 0) {
               alert("Incorrect information! Try again");
               i--;
               continue;
          }

     let  b = prompt('How can you score this film?', '');
         if (b == false || b.length > 50 || b.length == 0) {
          alert("Incorrect information! Try again");
          i--;
          continue;
         } else {
          personalMovieDB.movies[a] = b;
         }
}


// let a = prompt('What was the last film you watch?', '');
// let b = prompt('How can you score this film?', '');
// let c = prompt('What was the last film you watch?', '');
// let d = prompt('How can you score this film?', '');


// personalMovieDB.movies[c] = d;



console.log(personalMovieDB);