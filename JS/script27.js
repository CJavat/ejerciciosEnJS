alert("¡HOLA!, Vamos a calcular tu DNI. Debes introducir un número entre 0 y 99999999.");

const DNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
let calcularDNI = 0;
let numeroDNI = 0;
let errorDNI = false;

do {
    let numeroUsuario = parseInt(prompt("ESCRIBE UN NÚMERO ENTRE 0 y 99999999."));
    devolverDNI(numeroUsuario);
}while(confirm("¿Quieres volver a calcular tu numero DNI?"));

if(errorDNI === true) {
    document.write('""');
}
else {
    document.write("EL NUMERO QUE INTRODUJISTE FUE: " + numeroDNI + " Y TU DNI ES: " + DNI[calcularDNI]);
}


function devolverDNI(numeroUsuario) {
    numeroDNI = numeroUsuario;
    if(isNaN(numeroUsuario)) {
        alert("¡ERROR! - SOLO PUEDES ESCRIBIR NÚMEROS.");
        errorDNI = true;
    }
    else if(numeroUsuario < 0 | numeroUsuario > 99999999) {
        alert('""');
        errorDNI = true;
    }
    else {
        alert("CALCULANDO TU NUMERO DNI.");
        calcularDNI = (numeroUsuario % 23);
        alert("EL NUMERO QUE INTRODUJISTE FUE: " + numeroDNI + " Y TU DNI ES: " + DNI[calcularDNI]);
        errorDNI = false;
    }

}