let contador = 0;
let eleccion;
let informacion;
let p1;
let p2;
let p3;
let r1 = "flor de cerezo";
let r2 = "rio nilo";
let r3 = "cordillera de los andes";
const txt = document.getElementById("txt");
const boton = document.getElementById("boton");
const input = document.getElementById("TextInput");
const correcta1 = document.getElementById("correcta");

const infoRespuesta1 = {
  flor: "La flor de cerezo es una flor efímera de los cerezos que florece al comienzo de la primavera, puede ser de distintos colores pero mayormente es rosa pálido. Tiene un carácter simbólico especialmente en la cultura japonesa. Su árbol tiene una altura de seis metros, y se encuentra mayormente en la zona del hemisferio norte con climas templados",
};
const infoRespuesta2 = {
  rio: "El rio Nilo es el más largo de África con una longitud de 6,650 km y una anchura de 2,8 km es el segundo río más grande del mundo. Fluye hacia el norte a través del noreste de África para desembocar en el mar Mediterráneo.",
};

const infoRespuesta3 = {
  cordillera:
    "La cordillera de los andes se encuentra en la zona occidental de Ámerica del Sur, cuenta con una longitud de 8.500 km y una superficie de 3.371 millones de km²",
};

const array1 = [
  infoRespuesta1,
  {
    flor: "La flor de cerezo es una flor efímera de los cerezos que florece al comienzo de la primavera, puede ser de distintos colores pero mayormente es rosa pálido. Tiene un carácter simbólico especialmente en la cultura japonesa. Su árbol tiene una altura de seis metros, y se encuentra mayormente en la zona del hemisferio norte con climas templados",
  },
];

const array2 = [
  infoRespuesta2,
  {
    rio: "El rio Nilo es el más largo de África con una longitud de 6,650 km y una anchura de 2,8 km es el segundo río más grande del mundo. Fluye hacia el norte a través del noreste de África para desembocar en el mar Mediterráneo.",
  },
];

const array3 = [
  infoRespuesta3,
  {
    cordillera:
      "La cordillera de los andes se encuentra en la zona occidental de Ámerica del Sur, cuenta con una longitud de 8.500 km y una superficie de 3.371 millones de km²",
  },
];

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
    "Terminaste con una puntuacion de " + contador + " , felicidades.";
}

txt.textContent =
  "Bienvenido a un juego de preguntas, si desea jugar escriba 'quiero', sino lo desea escriba 'no quiero'";
boton.onclick = () => {
  if (input.value.toLowerCase() == "quiero") {
    txt.textContent =
      "La primera pregunta es. ¿Cuál es la flor nacional de Japón?";
    input.value = "";
    boton.id = "boton1";
    const boton1 = document.getElementById("boton1");
    boton1.onclick = () => {
      if (input.value.toLowerCase() == r1) {
        correcta();
        contador++;
      } else {
        incorrecta(r1);
      }
      const siguiente = document.getElementById("siguiente");
      siguiente.classList.replace("d-none", "d-block");
      siguiente.onclick = () => {
        correcta1.innerText = "";
        boton.id = "boton2";
        const boton2 = document.getElementById("boton2");
        txt.textContent =
          "La segunda pregunta es, ¿Cuál es el río más largo del mundo?";
        input.value = "";
        boton2.onclick = () => {
          if (input.value.toLowerCase() == r2) {
            correcta();
            contador++;
          } else {
            incorrecta(r2);
          }
          siguiente.onclick = () => {
            correcta1.innerText = "";
            boton.id = "boton3";
            const boton3 = document.getElementById("boton3");
            txt.textContent =
              "La tercera pregunta es, ¿Cuál es la cordillera más LARGA del mundo?";
            input.value = "";
            boton3.onclick = () => {
              if (input.value.toLowerCase() == r3) {
                correcta();
                contador++;
              } else {
                incorrecta(r3);
              }
            };
          };
        };
      };
    };
  }
};
