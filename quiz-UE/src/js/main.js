const request = new XMLHttpRequest();
request.addEventListener('load', function (event) {
 const response = event.target.response;
console.log(response);
  })
request.responseType = 'json';
request.open('GET', 'data.json');
request.send();

//Inicio slider
//Declarando variables 

let arrow_left = document.querySelector('.sliderSections__leftArrow');
let arrow_right = document.querySelector ('.sliderSections__rightArrow');
let slider__imgBackground = document.querySelector('.slider__imgBackground');
let container_slider = document.getElementsByClassName ('slider__content');

//imágenes

let imagenes = [
    'img/bg-event.jpeg',
    'img/bg-event-2.jpeg',
    'img/bg-event-3.jpeg',
    'img/bg-event-4.jpeg',
    'img/bg-event-5.jpeg'
];
let i = 0;

//función arrow left

arrow_left.addEventListener('click', anterior);
function anterior() {
    i--;
    if(i < 0) i = imagenes.length - 1;
    slider__imgBackground.style.setProperty('background-image', `url(${imagenes[i]})`);
}

//función arrow right

arrow_right.addEventListener('click', siguiente);
function siguiente() { 
    i++;
    if(i > imagenes.length - 1) i = 0;
    slider__imgBackground.style.setProperty('background-image', `url(${imagenes[i]})`);
}

//Fin del Slider

