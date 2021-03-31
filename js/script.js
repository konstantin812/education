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
        "Одержимость",
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

function addDepend() {
    let it = document.querySelectorAll('.promo__interactive-item');
    let movArr = movieDB.movies.sort();

    console.log(it);

    it.forEach(function(item, i) {
          item.innerHTML = `${i+1} ${movArr[i]} <div class="delete"></div>`;
       });
   }
addDepend();
