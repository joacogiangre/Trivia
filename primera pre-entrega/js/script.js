let contador = 0;
let eleccion;
let informacion;
let p1;
let p2;
let p3;
let r1 = "flor de cerezo";
let r2 = "rio nilo";
let r3 = "cordillera de los andes";


const infoRespuesta1 = {
  flor:"La flor de cerezo es una flor efímera de los cerezos que florece al comienzo de la primavera, puede ser de distintos colores pero mayormente es rosa pálido. Tiene un carácter simbólico especialmente en la cultura japonesa. Su árbol tiene una altura de seis metros, y se encuentra mayormente en la zona del hemisferio norte con climas templados"
};
const infoRespuesta2 = {
  rio:"El rio Nilo es el más largo de África con una longitud de 6,650 km y una anchura de 2,8 km es el segundo río más grande del mundo. Fluye hacia el norte a través del noreste de África para desembocar en el mar Mediterráneo."
};

const infoRespuesta3 = {
    cordillera:"La cordillera de los andes se encuentra en la zona occidental de Ámerica del Sur, cuenta con una longitud de 8.500 km y una superficie de 3.371 millones de km²"
};

const array1 = [
  infoRespuesta1,
  { flor: "La flor de cerezo es una flor efímera de los cerezos que florece al comienzo de la primavera, puede ser de distintos colores pero mayormente es rosa pálido. Tiene un carácter simbólico especialmente en la cultura japonesa. Su árbol tiene una altura de seis metros, y se encuentra mayormente en la zona del hemisferio norte con climas templados" },
];

const array2 = [
  infoRespuesta2,
  { rio:"El rio Nilo es el más largo de África con una longitud de 6,650 km y una anchura de 2,8 km es el segundo río más grande del mundo. Fluye hacia el norte a través del noreste de África para desembocar en el mar Mediterráneo." },
];

const array3 = [
  infoRespuesta3,
  { cordillera:"La cordillera de los andes se encuentra en la zona occidental de Ámerica del Sur, cuenta con una longitud de 8.500 km y una superficie de 3.371 millones de km²"}
];

function incorrecta() {
  alert(
    "¡Respondiste mal!, la respuesta era " +
      r1 +
      ". Vamos a la siguiente pregunta"
  );
}
function incorrecta2() {
  alert(
    "¡Buen intento, aunque es incorrecta!, la respuesta era " +
      r2 +
      ", acertaste " +
      contador
  );
}
function incorrecta3() {
  alert(
    "¡Buen intento, aunque es incorrecta!, la respuesta era " +
      r3 +
      ", acertaste " +
      contador
  );
}
function correcta() {
  alert("¡Respondiste bien!, vamos a la siguiente pregunta");
}

let pregBienvenida = prompt(
  "Bienvenido a un juego de preguntas, si desea jugar escriba 'quiero', sino lo desea escriba 'no quiero'"
);
if (pregBienvenida == "quiero") {
  alert("Antes de empezar a jugar le pedimos que escriba las respuestas en minúsculas");
  p1 = prompt("La primera pregunta es. ¿Cuál es la flor nacional de Japón?");
  if(p1 == r1){
    correcta();
    contador++;
  }else{
    incorrecta();
  }
  p2 = prompt("La segunda pregunta es, ¿Cuál es el río más largo del mundo?");
    if (p2 == r2) {
        correcta();
        contador++;
  }else{
    incorrecta2();
  }
  p3 = prompt("La tercera pregunta es, ¿Cuál es la cordillera más LARGA del mundo?");
    if (p3 ==r3) {
    alert("¡Respondiste bien!");
    contador++;
  } else{
    incorrecta3();
  }
  if(contador===3){
    alert("¡Felicidades! Ganaste la trivia de preguntas, tu puntuación fue de " +contador);
  }else{
    alert("¡Buen intento! Recarga la página y volve a intentarlo para conseguir una puntuación perfecta")
  }
  informacion = prompt("¿Querés saber más acerca de las respuestas que te presentamos? Escribi 'si' o 'no'.");
  if (informacion == "si") {
    let keyword=prompt("¿Sobre cual de las respuestas que te dimos querés saber más? Si elige sobre la Flor de cerezo le pedimos que escriba 'flor', si elige el Río Nilo 'rio', por otro lado si prefiere la Cordillera de los Andes escriba 'cordillera'. \n\n 1.Flor de cerezo \n2.Río Nilo \n3.Cordillera de los andes");
    if(keyword=="flor"){
      const filtrado=array1.filter((flor)=>flor.
      flor.includes(keyword));
      console.log(filtrado)
    }if(keyword=="rio"){
      const filtrado2=array2.filter((rio)=>rio.
      rio.includes(keyword));
      console.log(filtrado2)
    }if(keyword=="cordillera"){
      const filtrado3=array3.filter((cordillera)=>cordillera.
      cordillera.includes(keyword));
      console.log(filtrado3)
    }
  }else{
    alert("¡Gracias por visitarnos! Vuelva pronto.")
}
}else{
  alert("¡Gracias por visitarnos! Vuelva pronto.")
}