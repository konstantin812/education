/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';



const movieDB = {
    movies: [
        "Буратино",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Афоня",
        "Скотт Пилигрим против..."
    ]
};



function deleteAdvertisement() {
    let adv1 = document.querySelectorAll('.promo__adv img');
    adv1.forEach(function(item) {
        item.remove();
    }

    );
}
deleteAdvertisement();

function changeGenre() {
    let gen1 = document.querySelector('.promo__genre');
    gen1.textContent='ДРАМА';
}
changeGenre();

function changeBg() {
    let bg1 = document.querySelector('.promo__bg');
    bg1.style.backgroundImage = 'url("img/bg.jpg")';
}
changeBg();

addDepend();

 
console.log(movieDB.movies);

function addDepend() {
    let it = document.querySelector('.promo__interactive-list');    
            it.innerHTML = "";
    
    movieDB.movies.sort();


    movieDB.movies.forEach(function(item, i) {
        it.innerHTML += `<li class="promo__interactive-item"> ${i+1} ${item}
          <div class="delete"></div>
         </li>`;
       });
 }


 function addFilm() {
    let formAcess = document.querySelector('form.add');
    formAcess.addEventListener('submit', (event) => {
        event.preventDefault();
        let inputFilm = formAcess.value;
        movieDB.movies.push(inputFilm);
    }); 
}
addFilm();