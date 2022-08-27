let contador = 0;
let contador2 = 0;
let eleccion;
let informacion;
let r1;
let r2;
let r3;
let p1;
let p2;
let p3;
const preguntasArray = [];
const btnNoQuiero = document.getElementById("btnNoQuiero");
const btnQuiero = document.getElementById("btnQuiero");
const txt = document.getElementById("txt");
const boton = document.getElementById("boton");
const input = document.getElementById("textInput");
const correcta1 = document.getElementById("correcta");
const correcta2 = document.getElementById("correctaFinal");
const btnSwal = document.getElementById("botonSwal");
let emojis = [
  0x1f600, 0x1f604, 0x1f34a, 0x1f344, 0x1f37f, 0x1f363, 0x1f370, 0x1f355,
  0x1f354, 0x1f35f, 0x1f6c0, 0x1f48e, 0x1f5fa, 0x23f0, 0x1f579, 0x1f4da,
  0x1f431, 0x1f42a, 0x1f439, 0x1f424,
];

function incorrecta(respuesta) {
  Toastify({
    text: "¡Respondiste mal! Pero no te rindas la próxima pregunta seguro la respondes bien.",
    duration: 4000,
    style: {
      background: "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)",
      color: "black",
      width: "35vw",
      height: 80,
    },
    offset: {
      x: 20,
      y: 20,
    },
    onClick: () => {
      Toastify({
        text: "Hay dos formas de escribir programas sin errores; sólo la tercera funciona",
        duration: 1500,
        position: "left",
        style: {
          background: "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)",
          color: "black",
          width: "20vw",
          height: 80,
        },
        offset: {
          x: 10,
          y: 125,
        },
      }).showToast();
    },
  }).showToast();
}

function correcta() {
  contador2++;
  Toastify({
    text: "¡Respondiste bien, tocá el boton 'siguiente' para ir a la siguiente pregunta!",
    duration: 4000,
    style: {
      background: "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)",
      color: "black",
      width: "35vw",
      height: 80,
    },
    offset: {
      x: 20,
      y: 20,
    },
    onClick: () => {
      Toastify({
        text: "Es genial trabajar con ordenadores. No discuten, lo recuerdan todo y no se beben tu cerveza",
        duration: 1500,
        position: "left",
        style: {
          background: "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)",
          color: "black",
          width: "20vw",
          height: 80,
        },
        offset: {
          x: 10,
          y: 125,
        },
      }).showToast();
    },
  }).showToast();
}

function correctaFinal() {
  contador2++;
  const arrayCorrectas = [contador2];
  sessionStorage.setItem("arrayCorrectas", JSON.parse(arrayCorrectas));
  Swal.fire({
    title: "Puntaje",
    text:
      "¡Felicidades, respondió bien todas las preguntas! Su puntuacion fue de " +
      sessionStorage.getItem("arrayCorrectas") +
      " respuestas correctas",
    icon: "success",
    iconColor: "#81f40e",
    confirmButtonText: "Gracias",
  });
}

function getPreguntas() {
  fetch("../js/preguntas.json")
    .then((response) => response.json())
    .then((data) => {
      preguntasArray.push(...data);
    });
}

function mostrarInfoAdicional(pregunta) {
  Swal.fire({
    title: "Información adicional",
    text: pregunta.datoAdicional.informacion,
    icon: "info",
    iconColor: "#81f40e",
    confirmButtonText: "Fui informado",
  });
}

function mostrarPregunta(pregunta, index) {
  boton.classList.replace("d-none", "d-block");
  txt.textContent =
    pregunta[index].pregunta +
    "  1-  " +
    pregunta[index].opciones.incorrecta1 +
    "  2-  " +
    pregunta[index].opciones.correcta +
    "  3-  " +
    pregunta[index].opciones.incorrecta2;
  input.value = "";
  boton.id = "boton1";
  const boton1 = document.getElementById("boton1");
  boton1.onclick = () => {
    if (
      input.value.toLowerCase() == pregunta[index].opciones.correcta ||
      input.value == 2
    ) {
      if (index < 2) {
        correcta();
      } else {
        correctaFinal();
      }
      contador++;
    } else {
      incorrecta(pregunta[index].opciones.correcta);
    }
    index++;
    const siguiente = document.getElementById("siguiente");
    if (index < 3) {
      siguiente.classList.replace("d-none", "d-block");
      siguiente.onclick = () => {
        correcta1.innerText = "";
        mostrarPregunta(pregunta, index);
      };
    } else {
      siguiente.classList.replace("d-block", "d-none");
      const txtInfo = document.getElementById("txtInfo");
      txtInfo.textContent =
        "¿Querés saber más acerca de las respuestas que te presentamos? Tocá el boton si así lo preferis.";
      const info = document.getElementById("info");
      info.classList.replace("d-none", "d-block");
      info.onclick = () => {
        info.classList.replace("d-block", "d-none");
        txtInfo.textContent = "";
        const txtEleccion = document.getElementById("txtEleccion");
        txtEleccion.textContent =
          "¿Sobre cual querés saber? 1- Glaciar Perito Moreno 2- Salado Del Norte 3- Lago Traful";
        const txtInputInfo = document.getElementById("txtInputInfo");
        txtInputInfo.classList.replace("d-none", "d-block");
        const botonInfo = document.getElementById("botonInfo");
        botonInfo.classList.replace("d-none", "d-block");
        botonInfo.onclick = () => {
          if (
            txtInputInfo.value == 1 ||
            txtInputInfo.value.toLowerCase() == "glaciar perito moreno"
          ) {
            mostrarInfoAdicional(preguntasArray[0]);
          }
          if (
            txtInputInfo.value == 2 ||
            txtInputInfo.value.toLowerCase() == "salado del norte"
          ) {
            mostrarInfoAdicional(preguntasArray[1]);
          }
          if (
            txtInputInfo.value == 3 ||
            txtInputInfo.value.toLowerCase() == "lago traful"
          ) {
            mostrarInfoAdicional(preguntasArray[2]);
          }
        };
      };
    }
  };
}
getPreguntas();
txt.textContent =
  "Bienvenido a una TRIVIA de preguntas, ¿quiere jugar o prefiere seguir aburriendose?";
btnQuiero.onclick = () => {
  textInput.classList.replace("d-none", "d-block");
  mostrarPregunta(preguntasArray, 0);
  btnQuiero.classList.replace("d-block", "d-none");
  btnNoQuiero.classList.replace("d-block", "d-none");
};
btnNoQuiero.onclick = () => {
  Toastify({
    text: "¡Una lástima que no quieras jugar! Por ahí decían que a los que querían les regalaban un NFT...",
    duration: 4000,
    style: {
      background: "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)",
      color: "black",
      width: "35vw",
      height: 80,
    },
    offset: {
      x: 20,
      y: 20,
    },
  }).showToast();
};
