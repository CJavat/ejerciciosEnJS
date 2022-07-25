alert("Este es un simulador del juego: PIEDRA, PAPEL O TIJERAS");
let respuestaCorrecta = true;
let respuestaPC = ["piedra", "papel", "tijeras"];
let jugarOtraVez = "";
let juegosJugados = 0;

document.write(`<h1>RESULTADOS DEL JUEGO:</h1>`);

do {
    respuestaUsuario = prompt("Escribe tu decision: piedra, papel o tijeras");
    respuestaUsuarioMinuscula = respuestaUsuario.toLowerCase();
    
    if(respuestaUsuarioMinuscula === "piedra" | respuestaUsuarioMinuscula === "papel" | respuestaUsuarioMinuscula === "tijeras") {

        respuestaCorrecta = true;
        juegosJugados++;
        let numeroAleatorio = Math.floor(Math.random()*3);

        alert(`Tú escogiste: ${respuestaUsuario} y Yo escogí: ${respuestaPC[numeroAleatorio]}`);
        
        if(respuestaUsuarioMinuscula === respuestaPC[numeroAleatorio]) {
            document.write(`Juego #${juegosJugados} - ` + "UPS, HEMOS EMPATADO.<br>");
            alert("UPS, HEMOS EMPATADO.");
            
            jugarOtraVez = confirm("¿Quieres volver a jugar?");
            console.log(jugarOtraVez);
            if(jugarOtraVez === true) {
                respuestaCorrecta = false;
            }
            else {
                respuestaCorrecta = true;
                break;
            }
        }
        else if((respuestaUsuarioMinuscula === "piedra" & respuestaPC[numeroAleatorio] === 'papel') |
                (respuestaUsuarioMinuscula === "papel" & respuestaPC[numeroAleatorio] === 'tijeras')|
                (respuestaUsuarioMinuscula === "tijeras" & respuestaPC[numeroAleatorio] === 'piedra')) {
            
            document.write(`Juego #${juegosJugados} - ` + "HA!, HE GANADO, SUERTE PARA LA PROXIMA. <br>");
            alert("HA!, HE GANADO, SUERTE PARA LA PROXIMA.");

            jugarOtraVez = confirm("¿Quieres volver a jugar?");
            console.log(jugarOtraVez);
            if(jugarOtraVez === true) {
                respuestaCorrecta = false;
            }
            else {
                respuestaCorrecta = true;
                break;
            }
        }
        else {
            document.write(`Juego #${juegosJugados} - ` + "AY!, HAS GANADO, GRACIAS POR JUGAR. <br>");
            alert("AY!, HAS GANADO, GRACIAS POR JUGAR.");

            jugarOtraVez = confirm("¿Quieres volver a jugar?");
            console.log(jugarOtraVez);
            if(jugarOtraVez === true) {
                respuestaCorrecta = false;
            }
            else {
                respuestaCorrecta = true;
                break;
            }
        }
    }
    else {
        alert("ERROR - POR FAVOR ESCRIBE UNA RESPUESTA CORRECTA. (PIEDRA, PAPEL O TIJERAS)");
        respuestaCorrecta = false;
    }

}while(respuestaCorrecta === false);