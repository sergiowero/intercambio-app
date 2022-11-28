// Import stylesheets
import './style.css';

// Write Javascript code!

let personotas = [
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
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

while (papelitos.length > 0) {
  let numero_aleatorio = getRandomInt(papelitos.length);
  console.log(numero_aleatorio);
  papelitos.shift();
}

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Intercambio APP </h1>`;
