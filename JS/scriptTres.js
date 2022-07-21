alert("Escribe las cadenas de texto que quieras y te las voy a mostrar con un - para separarlas todas.");

let cadenaPalabras = "";
let palabra = "";
let indice = 0;

do {
    palabra = prompt("ESCRIBE UNA CADENADE DE TEXTO.");

    if(indice === 0) {
        cadenaPalabras += palabra;
    }
    else {
        cadenaPalabras += "-";
        cadenaPalabras += palabra;
    }

    indice++;
}while(confirm("¿Quieres seguir escribiendo más palabras?"))

document.write(cadenaPalabras)
