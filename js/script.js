<<<<<<< HEAD
/* Задания на урок:
=======
" use strict";
// let numberOfFilms;
// let numberOfFilms; 
>>>>>>> 023cd59631008c12dfe1e732f18f2753de3f7f5b

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

<<<<<<< HEAD
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
=======
let personalMovieDB = {
     count : 0,
     movies : {},
     actors : {},
     genres : [],
     privat : false,
     startProg() {
          personalMovieDB.count = +prompt('How many films you have watched yet?', '');
          while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
               personalMovieDB.count = +prompt('How many films you have watched yet?', '');
          }
     },
     detectPersonalLevel() {   
          if (personalMovieDB.count < 10) {
               console.log('Not many films!');
          } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
               console.log('It is usual!');
          } else if (personalMovieDB.count >= 30) {
               console.log('You are a great films lover!');
          } else {
               console.log('It is not correct1 information');
          }
     }, 
     rememberMyFilms() {
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
     }, 
     writeYourGenres() {
          for (let i = 0; i < 3; i++) {
               let a = prompt(`What is you favoutite genres ${i+1}`, ``);
               if (a != null && a != '') {
                    personalMovieDB.genres[i] = a;
               } else {
                    a = prompt(`What is you favoutite genres ${i+1}`, ``);
                    i--;
               }     
          }
          personalMovieDB.genres.forEach((genr, i) =>   {
               console.log(`Любимый жанр ${i+1} - это ${genr}`);
          });
     },
     showMyDB() {
          if(personalMovieDB.privat == false) {
               console.log(personalMovieDB);
          }
     },
     toggleVisibleMyDB() {
          if(personalMovieDB.privat) {
               personalMovieDB.privat = false;
          } else{
               personalMovieDB.privat = true;
          }
     }           
};

personalMovieDB.startProg();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();


>>>>>>> 023cd59631008c12dfe1e732f18f2753de3f7f5b

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

<<<<<<< HEAD
function deleteAdvertisement() {
    let adv1 = document.querySelector('.promo__adv');
    adv1.remove('promo__adv');
}
deleteAdvertisement();

function changeGenre() {
    let gen1 = document.querySelector('.promo__genre');
    gen1.textContent='ДРАМА';
}
changeGenre();
=======
// function detectPersonalLevel() {
//      if (personalMovieDB.count < 10) {
//           console.log('Not many films!');
//      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//           console.log('It is usual!');
//      } else if (personalMovieDB.count >= 30) {
//           console.log('You are a great films lover!');
//      } else {
//           console.log('It is not correct1 information');
//      }
// }

// detectPersonalLevel();


// function showMyDB() {
//      if(personalMovieDB.privat == false) {
//           console.log(personalMovieDB);
//      }
// }

// function writeYourGenres() {
//      for (let i = 0; i < 3; i++) {
//           let a = prompt(`What is you favoutite genres ${i+1}`, ``);
//           personalMovieDB.genres[i] = a;
//      }
// }
// writeYourGenres();

                    // console.log(personalMovieDB);

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
     
>>>>>>> 023cd59631008c12dfe1e732f18f2753de3f7f5b

function changeBg() {
    let bg1 = document.querySelector('.promo__bg');
    bg1.setAttribute('style' , "background : url('../img/bg.jpg')");
}
changeBg();

function addDepend() {
    let it = document.querySelector('.promo__interactive-list').childNodes;
    console.log(it);
    for (let node of it) {
        if (node.nodeName ="#text") {
            continue;
        }
       console.log(node);
    }
        // movieDB.movies.forEach(function(item, i) {
        //     
        // });

<<<<<<< HEAD
}
addDepend();
=======
console.log(personalMovieDB);



>>>>>>> 023cd59631008c12dfe1e732f18f2753de3f7f5b
