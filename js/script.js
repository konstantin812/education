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

}
addDepend();