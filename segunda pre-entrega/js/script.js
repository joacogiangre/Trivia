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
const correcta2=document.getElementById("correctaFinal");
let recordar= document.getElementById("rememberMe");
const btnSwal = document.getElementById('botonSwal');

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
    "¡Es correcta, felicitaciones! Terminaste con una puntuacion de " + contador + " respuestas respondidas correctamente";
}

function guardarDatos(storage) {

  let confirmacion1 = document.getElementById('textInput').value;

  const guardar = {
      "confirmacion": confirmacion1
  }

  storage.setItem('confirmacion', JSON.stringify(guardar))
}



const pregunta1 = {
	pregunta: "¿Cuánto mide de alto el Glaciar Perito Moreno?",
	opciones: {
			incorrecta1: "70 metros",
			correcta: "60 metros",
			incorrecta2: "80 metros"
	},
  datoAdicional:{
    informacion:"El glaciar Perito Moreno es una gruesa masa de hielo ubicada en el departamento Lago Argentino de la provincia de Santa Cruz, en el sudoeste de la Argentina, en la región de la Patagonia. Se integra dentro del parque nacional Los Glaciares. Este glaciar se origina en el campo de hielo Patagónico Sur."
  }
}

const pregunta2 = {
	pregunta: "¿Cuál de estos ríos es el más extenso?",
	opciones: {
      correcta: "Salado del Norte",
			incorrecta1: "Bermejo",
			incorrecta2: "Parana"
	},
  datoAdicional:{
    informacion:"El río Salado, río Salado del Norte, río Juramento o Pasaje es un importante curso fluvial del centro norte de Argentina, perteneciente al complejo hídrico de la Cuenca del Plata. Tiene una longitud de 2210 km, y drena una amplia cuenca de 124 199 km²."
  }
}

const pregunta3 = {
	pregunta: "¿En qué provincia se encuentra el Lago Traful?",
	opciones: {
			incorrecta1: "Río negro",
			correcta: "Neuquén",
			incorrecta2: "Santa Cruz"
	},
  datoAdicional:{
    informacion:"El lago Traful es un lago de Argentina localizado en el departamento Los Lagos de la provincia del Neuquén. Se encuentra dentro del parque nacional Nahuel Huapi. Tiene una superficie de 76 km² y es el punto de inicio del río Traful, un afluente del río Limay."
  }
}

const preguntasArray=[pregunta1,pregunta2,pregunta3,]

txt.textContent =
  "Bienvenido a un juego de preguntas, si desea jugar escriba 'quiero', sino lo desea escriba 'no quiero'";
  boton.addEventListener('click', () => {
    recordar.checked ? guardarDatos(localStorage):guardarDatos(sessionStorage);
  })
boton.onclick = () => {
  const checkbox=document.getElementById("divRecordar")
  checkbox.classList.replace("checkbox","d-none")
  if (input.value.toLowerCase() == "quiero") {
    txt.textContent =
      pregunta1.pregunta + "  1-  " + pregunta1.opciones.incorrecta1 + "  2-  " + pregunta1.opciones.correcta + "  3-  " + pregunta1.opciones.incorrecta2;
    input.value = "";
    boton.id = "boton1";
    const boton1 = document.getElementById("boton1");
    boton1.onclick = () => {
      if (input.value.toLowerCase() == pregunta1.opciones.correcta||input.value==2) {
        correcta();
        contador++;
      } else {
        incorrecta(pregunta1.opciones.correcta);
      }
      const siguiente = document.getElementById("siguiente");
      siguiente.classList.replace("d-none", "d-block");
      siguiente.onclick = () => {
        correcta1.innerText = "";
        boton.id = "boton2";
        const boton2 = document.getElementById("boton2");
        txt.textContent =
        pregunta2.pregunta + "  1-  " + pregunta2.opciones.correcta + "  2-  " + pregunta2.opciones.incorrecta1 + "  3-  " + pregunta2.opciones.incorrecta2;
        input.value = "";
        boton2.onclick = () => {
          if (input.value.toLowerCase() == pregunta2.opciones.correcta||input.value==1) {
            correcta();
            contador++;
          } else {
            incorrecta(pregunta2.opciones.correcta);
          }
        }
        siguiente.onclick = () => {
          correcta1.innerText = "";
          boton.id = "boton3";
          const boton3 = document.getElementById("boton3");
          txt.textContent =
          pregunta3.pregunta + "  1-  " + pregunta3.opciones.incorrecta1 + "  2-  " + pregunta3.opciones.correcta + "  3-  " + pregunta3.opciones.incorrecta2;
          input.value = "";
          boton3.onclick = () => {
            if (input.value.toLowerCase() == pregunta3.opciones.correcta||input.value==2) {
              contador++;
              correctaFinal();
            } else {
              incorrecta(pregunta3.opciones.correcta);
            };
            siguiente.classList.replace("d-block","d-none")
            const txtInfo=document.getElementById("txtInfo")
            txtInfo.textContent="¿Querés saber más acerca de las respuestas que te presentamos? Tocá el boton si así lo preferis.";
            const info=document.getElementById("info");
            info.classList.replace("d-none", "d-block")
            info.onclick=()=>{
              const txtEleccion=document.getElementById("txtEleccion")
              txtEleccion.textContent="¿Sobre cual querés saber? 1- Glaciar Perito Moreno 2- Salado Del Norte 3- Lago Traful";
              const txtInputInfo=document.getElementById("txtInputInfo");
              txtInputInfo.classList.replace("d-none","d-block")
              const botonInfo=document.getElementById("botonInfo");
              botonInfo.classList.replace("d-none","d-block")
              botonInfo.onclick=()=>{
                if(txtInputInfo.value==1||txtInputInfo.value.toLowerCase()=="glaciar perito moreno"){
                  Swal.fire(
                    {
                title:'Información adicional',
                text:pregunta1.datoAdicional.informacion,
                icon:'info',
                iconColor:'#81f40e',
                confirmButtonText:'Fui informado',
                position:'top-center'
                    }
                )
                }
                if(txtInputInfo.value==2||txtInputInfo.value.toLowerCase()=="salado del norte"){
                  Swal.fire(
                    {
                title:'Información adicional',
                text:pregunta2.datoAdicional.informacion,
                icon:'info',
                iconColor:'#81f40e',
                confirmButtonText:'Fui informado',
                position:'top-center'
                    }
                )
                }
                if(txtInputInfo.value==3||txtInputInfo.value.toLowerCase()=="lago traful"){
                  Swal.fire(
                    {
                title:'Información adicional',
                text:pregunta3.datoAdicional.informacion,
                icon:'info',
                iconColor:'#81f40e',
                confirmButtonText:'Fui informado',
                position:'top-center'
                    }
                )
                }
              }
            }
          };
        };
      };
    };
  }else{
    txt.textContent ="Hasta luego, ¡vuelva pronto!"
  }
}