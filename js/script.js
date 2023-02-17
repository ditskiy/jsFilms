/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const 
    movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    },
    img = document.getElementsByTagName("img"),
    genre = document.getElementsByClassName("promo__genre"),
    genreNew = document.createElement("div");


for (let i = 1; i < img.length; i++) {
    img[i].style.cssText = "display: none";
}
genreNew.classList.add("promo__genre");
genreNew.textContent = "ДРАМА";
genre[0].replaceWith(genreNew)


