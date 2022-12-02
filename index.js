// Import stylesheets
import './style.css';

function hacerIntercambio() {
  let nombres = document.getElementById('nombres').value;
  let personas = nombres.split(',');
  let papelitos = nombres.split(',');
  let asignaciones = {};

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

  document.getElementById('resultado').innerHTML = JSON.stringify(asignaciones);
}
