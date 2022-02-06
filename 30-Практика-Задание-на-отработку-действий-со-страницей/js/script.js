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


const adblock = document.querySelector(".promo__adv");
const ads = adblock.querySelectorAll("img");
const genre = document.querySelector(".promo__genre");
const bg = document.querySelector(".promo__bg");
const moviesList = document.querySelector(".promo__interactive-list");

ads.forEach((ad) => {
    ad.remove();
});

genre.textContent = "Драма";

bg.style.background = "url('img/bg.jpg')";


movieDB.movies.sort();
console.log(movieDB.movies);

moviesList.innerHTML = "";

movieDB.movies.forEach((film, i) => {
    moviesList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
         <div class="delete"></div>
    </li>
    `
});