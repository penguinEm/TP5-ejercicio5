/* 5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
 */

//* ------------------------------------------- VARIABLES GLOBALES -------------------------------------------------------- */

const spanMinutos = document.querySelector(".minutos");
const spanSegundos = document.querySelector(".segundos");
const spanMilisegundos = document.querySelector(".milisegundos");

const botonIniciar = document.querySelector("#iniciar");
const botonPausar = document.querySelector("#pausar");
const botonReiniciar = document.querySelector("#reiniciar");

let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let cronometro;

/* ------------------------------------------- FUNCIONES ------------------------------------------------------------------ */
function formatearTiempo(valor) {
  if (valor < 10 ) {
    valor = `0${valor}`
  } else {
    valor
  }
  return valor 
}

function dibujarTiempo() {
  const minutosFormateados = formatearTiempo(minutos);
  const segundosFormateados = formatearTiempo(segundos);
  const milisegundosFormateados = formatearTiempo(milisegundos);

  spanMinutos.innerHTML = minutosFormateados;
  spanSegundos.innerHTML = segundosFormateados;
  spanMilisegundos.innerHTML = milisegundosFormateados;
}

function iniciarCronometro() {
  cronometro = setInterval(function () {
    milisegundos++;

    if (milisegundos === 100) {
      milisegundos = 0;
      segundos++;

      if (segundos === 60) {
        segundos = 0;
        minutos++;
      }
    }

    dibujarTiempo();
  }, 10);
}

function pausarCronometro() {
  clearInterval(cronometro);
}

function reiniciarCronometro() {
  pausarCronometro();
  minutos = 0;
  segundos = 0;
  milisegundos = 0;
  dibujarTiempo();
}

/* --------------------------------------------- log extra------------------------------------------------------- */

botonIniciar.addEventListener("click", iniciarCronometro);
botonPausar.addEventListener("click", pausarCronometro);
botonReiniciar.addEventListener("click", reiniciarCronometro);
