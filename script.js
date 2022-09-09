const h1 = document.querySelector('h1');
const h1OtroMetodo = document.getElementsByClassName('tituloPrincipal');

h1.innerHTML = 'Este es el nuevo título resaltado<h2>Este es un subtitulo insertado por js</h2>';

console.log({h1OtroMetodo});

const h2 = document.querySelector('h2');

h2.setAttribute('class','subtitulo');

const imagen = document.createElement('img');
const parrafo = document.querySelector('p');

imagen.setAttribute('src', './imgs/white-and-black-short-coated-dog.jpg');

parrafo.append(imagen);

parrafo.appendChild(imagen);
