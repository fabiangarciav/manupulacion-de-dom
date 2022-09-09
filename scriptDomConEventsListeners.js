const inputCalculo1 = document.querySelector('#calculo1');
const inputCalculo2 = document.querySelector('#calculo2');
const boton = document.querySelector('#botonCalcular');
const resultado = document.querySelector('#resultado');

boton.addEventListener('click', calcularValores);

function calcularValores () {
    inputCalculo1.value + inputCalculo2.value
    let sumaInputs = +inputCalculo1.value + +inputCalculo2.value;
    resultado.innerText = "El resultado es: " + sumaInputs;
}