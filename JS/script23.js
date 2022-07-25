alert("Debes introducir una cadena de texto y te mostraremos la posicion de la primera vocal.");
let cadena = prompt("Ingresa la cadena de texto.");
let cadenaMinuscula = cadena.toLowerCase();

for(let i=0; i<cadenaMinuscula.length; i++) {
    if(cadenaMinuscula[i].includes('a') | cadenaMinuscula[i].includes('e') | cadenaMinuscula[i].includes('i') |
    cadenaMinuscula[i].includes('o') | cadenaMinuscula[i].includes('u')) {
        document.write(`La palabra que introdujiste fué: ${cadena} <br>`);
        document.write(`La primera vocal es: '${cadena[i]}' y esta en la posicion: #${i+1}`);
        break;
    }
}