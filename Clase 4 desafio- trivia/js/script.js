let contador = 0;
let p1;
let p2;
let p3;
let r1 = "flor de cerezo";
let r2 = "rio nilo";
let r3 = "cordillera de los andes";

function incorrecta(){
    alert("¡Respondiste mal!, la respuesta era" +r1+". Vamos a la siguiente pregunta");
}
function incorrecta2(){
    alert("¡Buen intento, aunque es incorrecta!, la respuesta era "+r2+", acertaste " + contador);
}
function incorrecta3(){
    alert("¡Buen intento, aunque es incorrecta!, la respuesta era "+r3+", acertaste " + contador);
}
function correcta(){
    alert("¡Respondiste bien!, vamos a la siguiente pregunta");
}

let pregBienvenida = prompt("Bienvenido a un juego de preguntas, si desea jugar escriba 'quiero', sino lo desea escriba 'no quiero'");
if (pregBienvenida == "quiero") {
    alert("Antes de empezar a jugar le pedimos que escriba las respuestas en minúsculas");
    p1 = prompt("La primera pregunta es. ¿Cuál es la flor nacional de Japón?");
    if (p1 != r1) {
        incorrecta();
    } else {
        correcta();
        contador++;
    }
    p2 = prompt("La segunda pregunta es, ¿Cuál es el río más largo del mundo?");
    if (p2 != r2) {
        incorrecta2();
    } else {
        correcta();
        contador++;
    }
    p3 = prompt("La tercera pregunta es, ¿Cuál es la cordillera más LARGA del mundo?");
    if (p3 != r3) {
        incorrecta3();
    } else {
        alert("¡Respondiste bien!");
        contador++;
        alert("¡Felicidades! Ganaste la trivia de preguntas, tu puntuación fue de " + contador);
    }
} else {
    alert("¡Hasta luego! Gracias por visitar nuestro sitio");
}