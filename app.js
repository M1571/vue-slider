// console.log('prova');

/*
Descrizione:
Partendo dal markup della versione svolta vanilla js con l’array di oggetti,
rifare lo slider ma questa volta usando Vue

Bonus:
1. al click su una thumb, visualizzare in grande l’immagine corrispondente
2. applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente 
(attenzione! con Vue si fa in maniera leggermente diversa da come lo abbiamo fatto in vanilla-js)
3. quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
*/

// ----------------------------------------------

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// ----------------------------------------------

let title2 = document.querySelector(".img-bg h2")

let active = 0;

let imgBg = document.querySelector(".img-bg");

let pargF = document.querySelector(".img-bg p");

// ----------------------------------------------

const btn = document.querySelector(".btn-dw");
btn.addEventListener('click',
    function () {
        if (active < items.length - 1) {
            console.log("click");
            active++
            console.log(active);
            imgBg.setAttribute("src", items[active])
            title2.innerHTML = title[active]
            pargF.innerHTML = text[active]
        }
    }

)

// ----------------------------------------------

let btnUp = document.querySelector(".btn-up")
btnUp.addEventListener('click',
    function () {
        if (active > 0) {
            active--
            imgBg.setAttribute("src", items[active])
            title2.innerHTML = title[active]
            pargF.innerHTML = text[active]
        }
    }
)