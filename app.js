/*
const items = [
    {
        photo: 'img/01.jpg',
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
    },
    {
        photo: 'img/02.jpg',
        title: "Svizzera",
        text: "Lorem ipsum."
    },
    {
        photo: 'img/03.jpg',
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
        photo: 'img/04.jpg',
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
    },
    {
        photo: 'img/05.jpg',
        title: "Paradise",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
    }
];

// ----------------------------------------------

const itemsRef = document.getElementsByClassName('items')[0];
const thumbsRef = document.getElementsByClassName('thumbs')[0];

let item = '';
let thumb = '';
let active = 1;

// ----------------------------------------------

for (let key in items) {
    item += `
        <div class="item">
            <img src="${items[key].photo}" alt="">
            <div class="text">
                <h3>${items[key].title}</h3>
                <p>${items[key].text}</p>
            </div>
        </div>`
    thumb += `
        <div class="thumb">
            <img src="${items[key].photo}" alt="">
        </div>
    `
}

// ----------------------------------------------

itemsRef.innerHTML = item;
document.getElementsByClassName('item')[active].classList.add('active');

thumbsRef.innerHTML += thumb;
document.getElementsByClassName('thumb')[active].classList.add('active');

// ----------------------------------------------

const prev = document.querySelector('.prev');
prev.addEventListener('click', function() {
    if(active == 0) {                                                                   
        active = items.length - 1; 

        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if(active < items.length) {
        --active
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } 
});

// ----------------------------------------------

const next = document.querySelector('.next');
next.addEventListener('click', function() {
    if(active < items.length - 1) {
        ++active
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    } else if(active == items.length - 1) { 
        active = 0;
        document.querySelector('.item.active').classList.remove('active');
        document.getElementsByClassName('item')[active].classList.add('active');

        document.querySelector('.thumb.active').classList.remove('active');
        document.getElementsByClassName('thumb')[active].classList.add('active');
    }
});
*/

// ----------------------------------------------
// VUE

const app = new Vue(
    {
        el: '#app',
        data: {
            items: [
                {
                    url: './img/01.jpg',
                    name: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    url: './img/02.jpg',
                    name: 'Svizzera',
                    text: 'Lorem ipsum.'
                },
                {
                    url: './img/03.jpg',
                    name: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    url: './img/04.jpg',
                    name: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                },
                {
                    url: './img/05.jpg',
                    name: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                }
            ],
            active: 0,
            clock:0,

        }, 

        // ----------------------------------------------

        methods: {
            
            previous() {
                if (this.active == 0) {
                    this.active = this.items.length - 1;
                } else {
                    this.active--;
                }

            },
            next() {
                if (this.active == this.items.length -1) {
                    this.active = 0;
                } else {
                    this.active++;
                }
                
            },

            gotoSlide(index) {
                this.active = index;
            },

            autoplay() {
                this.clock = setInterval(() => {
                    this.next();
                },3000);
                },

            stopPlay() {
                clearInterval(this.clock);
                this.clock = null;
            }
            }
        }
    
);

// ----------------------------------------------



