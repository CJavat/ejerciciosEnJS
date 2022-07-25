alert("Este programa te va a devolver la posicion de la primera vocal.");
let cadena = prompt("Escribe una cadena de texto.");
let cadenaMinuscula = cadena.toLowerCase();

for(let i=0; i<cadenaMinuscula.length; i++) {
    if(cadenaMinuscula[i] === 'a' | cadenaMinuscula[i] === 'e' | cadenaMinuscula[i] === 'i' |
    cadenaMinuscula[i] === 'o' | cadenaMinuscula[i] === 'u') {
        document.write(`La palabra que introdujiste fué: ${cadena} <br>`);
        document.write(`La primera vocal es: '${cadena[i]}' y esta en la posicion: #${i+1}`);
        break;
    }
}