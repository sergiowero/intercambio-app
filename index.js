// Import stylesheets
import './style.css';

// Write Javascript code!

let personas = [
  'Panchito',
  'Majo',
  'Leo',
  'checho',
  'Laura',
  'Carmen',
  'Ernesto',
  'Evan',
];
let papelitos = [
  'Panchito',
  'Majo',
  'Leo',
  'checho',
  'Laura',
  'Carmen',
  'Ernesto',
  'Evan',
];
let asignaciones = {
  Panchito: 'Laura',
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let iter = 0;

while (papelitos.length > 0) {
  let numero_aleatorio = getRandomInt(papelitos.length);
  let nombre = personas[iter];
  let PapelitoSeleccionada = papelitos[numero_aleatorio];

  if (nombre != PapelitoSeleccionada) {
    asignaciones[nombre] = PapelitoSeleccionada;
    papelitos.splice(numero_aleatorio, 1);
    iter++;
  }
}

console.log(asignaciones);

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Intercambio APP </h1>`;
