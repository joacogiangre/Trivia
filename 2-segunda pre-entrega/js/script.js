let contador = 0;
let eleccion;
let informacion;
let r1;
let r2;
let r3;
let p1;
let p2;
let p3;

const txt = document.getElementById("txt");
const boton = document.getElementById("boton");
const input = document.getElementById("textInput");
const correcta1 = document.getElementById("correcta");
const correcta2 = document.getElementById("correctaFinal");
let recordar = document.getElementById("rememberMe");
const btnSwal = document.getElementById("botonSwal");

function incorrecta(respuesta) {
  correcta1.textContent =
    "¡Respondiste mal!, la respuesta era " +
    respuesta +
    ". Vamos a la siguiente pregunta";
}

function correcta() {
  correcta1.textContent = "¡Respondiste bien!, vamos a la siguiente pregunta";
}

function correctaFinal() {
  correcta2.textContent =
    "¡Es correcta, felicitaciones! Terminaste con una puntuacion de " +
    (contador+1) +
    " respuestas respondidas correctamente";
}

function guardarDatos(storage) {
  let confirmacion1 = document.getElementById("textInput").value;

  const guardar = {
    confirmacion: confirmacion1,
  };

  storage.setItem("confirmacion", JSON.stringify(guardar));
}

const preguntasArray = [];

function getPreguntas() {
    fetch('../js/preguntas.json')
    .then((response) => response.json())
    .then((data) => {
      preguntasArray.push(...data);
    })
}

function mostrarInfoAdicional(pregunta){
  Swal.fire({
    title: "Información adicional",
    text: pregunta.datoAdicional.informacion,
    icon: "info",
    iconColor: "#81f40e",
    confirmButtonText: "Fui informado",
  });
}

function mostrarPregunta(pregunta, index) {
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
      if(index<2){
        correcta();
      }else{
        correctaFinal();
      }
      contador++;
    } else {
      incorrecta(pregunta[index].opciones.correcta);
    }
    index++;
    const siguiente = document.getElementById("siguiente");
    if(index<3){
      siguiente.classList.replace("d-none", "d-block");
      siguiente.onclick = () => {
      correcta1.innerText="";
      mostrarPregunta(pregunta, index)
    };
      }else{
        siguiente.classList.replace("d-block", "d-none");
            const txtInfo = document.getElementById("txtInfo");
            txtInfo.textContent =
              "¿Querés saber más acerca de las respuestas que te presentamos? Tocá el boton si así lo preferis.";
            const info = document.getElementById("info");
            info.classList.replace("d-none", "d-block");
            info.onclick = () => {
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
                  mostrarInfoAdicional(preguntasArray[0])
                }
                if (
                  txtInputInfo.value == 2 ||
                  txtInputInfo.value.toLowerCase() == "salado del norte"
                ) {
                  mostrarInfoAdicional(preguntasArray[1])
                }
                if (
                  txtInputInfo.value == 3 ||
                  txtInputInfo.value.toLowerCase() == "lago traful"
                ) {
                  mostrarInfoAdicional(preguntasArray[2])
                }
              };
            };
      }
    
  };
}
getPreguntas()
txt.textContent =
  "Bienvenido a un juego de preguntas, si desea jugar escriba 'quiero', sino lo desea escriba 'no quiero'";
boton.addEventListener("click", () => {
  recordar.checked ? guardarDatos(localStorage) : guardarDatos(sessionStorage);
});
boton.onclick = () => {
  const checkbox = document.getElementById("divRecordar");
  checkbox.classList.replace("checkbox", "d-none");
  if (input.value.toLowerCase() == "quiero") {
    mostrarPregunta(preguntasArray, 0)
  } else {
    txt.textContent = "Hasta luego, ¡vuelva pronto!";
  }
};
