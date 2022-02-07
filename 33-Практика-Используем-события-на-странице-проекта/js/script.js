/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const adblock = document.querySelector(".promo__adv"),
        ads = adblock.querySelectorAll("img"),
        genre = document.querySelector(".promo__genre"),
        bg = document.querySelector(".promo__bg"),
        moviesList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector("form.add"),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (checkbox.checked && newFilm) {
            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);

            createMovieList(movieDB.movies, moviesList);

            event.target.reset();
        }
    })

    const deleteAdv = (arr) => {
        arr.forEach((item) => {
            item.remove();
        });
    }





    const makeChanges = () => {
        genre.textContent = "Драма";
        bg.style.background = "url('img/bg.jpg')";
    }

    const sortArray = (arr) => {
        arr.sort();
    }


    function createMovieList(films, parent) {
        parent.innerHTML = "";

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                 <div class="delete"></div>
            </li>
            `
        });
    }

    deleteAdv(ads);
    makeChanges();
    sortArray(movieDB.movies);

    createMovieList(movieDB.movies, moviesList);

});