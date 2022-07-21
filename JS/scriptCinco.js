alert("¡HOLA!, Vamos a calcular tu DNI. Debes introducir un número entre 0 y 99999999.");
const DNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
let calcularDNI = 0;
let numeroDNI = 0;
do {
    let numeroUsuario = parseInt(prompt("ESCRIBE UN NÚMERO ENTRE 0 y 99999999."));
    numeroDNI = numeroUsuario;
    if(isNaN(numeroUsuario)) {
        alert("¡ERROR! - SOLO PUEDES ESCRIBIR NÚMEROS.");
    }
    else {
        alert("CALCULANDO TU NUMERO DNI.");
        calcularDNI = (numeroUsuario % 23);
    }

}while(confirm("¿Quieres volver a calcular tu numero DNI?"));

document.write("EL NUMERO QUE INTRODUJISTE FUE: " + numeroDNI + " Y TU DNI ES: " + DNI[calcularDNI]);

