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
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
let it = document.querySelector('.promo__interactive-list'),
    adv1 = document.querySelector('.promo__adv'),
    bg1 = document.querySelector('.promo__bg'),
    addF = document.querySelector('form.add'),
    addInput = document.querySelector('.adding__input'),
    gen1 = document.querySelector('.promo__genre');

movieDB.movies.sort();

function addForm() {
    
    addF.addEventListener('submit', (e) => {
        e.preventDefault();
        let inputValue = addInput.value;
        movieDB.movies.push(inputValue);
        movieDB.movies.sort();
        addDepend(movieDB.movies, it);
    });
    
}
addForm();

function deleteAdvertisement() {
    adv1.remove('promo__adv');
}
deleteAdvertisement();

function changeGenre() {
    gen1.textContent='ДРАМА';
}
changeGenre();

function changeBg() {
    bg1.setAttribute('style' , "background : url('../img/bg.jpg')");
}
changeBg();

function addDepend(films, parent) {
    parent.innerHTML = "";
        films.forEach(function(item, i) {
        parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}
        <div class="delete"></div>
    </li>`;
    });
}
addDepend(movieDB.movies, it);





