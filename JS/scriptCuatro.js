alert("¡HOLA!, Te vamos a pedir los números que quieras introducir y al final haremos la suma de todos.");
let suma = 0;
do {
    let numero = parseInt(prompt("Escribe un número."));

    if(isNaN(numero)) {
        alert("CARACTERES NO SON VÁLIDOS, POR FAVOR ESCRIBE UN NÚMERO.");
    }
    else {
        suma += numero;
    }

}while(confirm("¿Quieres seguir introduciendo números?"));

document.write("La suma total de los numeros es de: <b style = 'color:red;'>" + suma + "</b>");