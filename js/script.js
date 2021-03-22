" use strict";

let numberOfFilms; 

function start() {
     numberOfFilms = +prompt('How many films you have watched yet?', ''); 
     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
          numberOfFilms = +prompt('How many films you have watched yet?', '');
     }
}

start();
 
let personalMovieDB = {
     count : numberOfFilms,
     movies : {},
     actors : {},
     genres : [],
     privat : false
};

function rememberMyFilms() {
     for (let i = 0; i < 2; i++) {

          let a = prompt('What was the last film you watch?', '');
          let b = prompt('How can you score this film?', '');
     
          if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != '') {
               personalMovieDB.movies[a] = b;
          } else {
               alert('It is not correct information');
               i--;
          }
     }
}

rememberMyFilms();


function detectPersonalLevel() {
     if (personalMovieDB.count < 10) {
          console.log('Not many films!');
     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
          console.log('It is usual!');
     } else if (personalMovieDB.count >= 30) {
          console.log('You are a great films lover!');
     } else {
          console.log('It is not correct information');
     }
}

detectPersonalLevel();


function showMyDB() {
     if(personalMovieDB.privat == false) {
          console.log(personalMovieDB);
     }
}

function writeYourGenres() {
     for (let i = 0; i < 3; i++) {
          let a = prompt(`What is you favoutite genres ${i+1}`, ``);
          personalMovieDB.genres[i] = a;
     }
}
writeYourGenres();

console.log(personalMovieDB);

     // let i = 0;
     // while (i < 2){
     //      let a = prompt('What was the last film you watch?', '');
     //      let  b = prompt('How can you score this film?', '');

     //      if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != '') {
     //           personalMovieDB.movies[a] = b;
     //      } else {
     //           alert('It is not correct information');
     //           i--;
     //      }
     //      i++;
     // }
     
     // let i = 0;
     // do {
     //      let a = prompt('What was the last film you watch?', '');
     //      let  b = prompt('How can you score this film?', '');

     //      if (a != null && b != null && a.length < 50 && b.length < 50 && a != '' && b != '') {
     //           personalMovieDB.movies[a] = b;
     //      } else {
     //           alert('It is not correct information');
     //           i--;
     //      }
     //      i++;
     // } while (i < 2);
     


// console.log(personalMovieDB);



