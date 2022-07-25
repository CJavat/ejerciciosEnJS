alert("La cadena de texto que des se va a mostrar invertida.");
let cadenaDeTexto = prompt("Escribe una cadena de texto.");
let textSize = cadenaDeTexto.length-1;
let cadenaInvertida = " ";

for(let i=textSize; i>=0; i--) {
    cadenaInvertida += cadenaDeTexto[i];
}

document.write(`El texto original es: ${cadenaDeTexto} <br>Y el texto este es el texto invertido: ${cadenaInvertida}.`);