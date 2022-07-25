alert("TE MOSTRAREMOS CUANTO TIEMPO TARDASTE EN ESCRIBIR TU NOMBRE Y APELLIDOS.");

let firstDate = new Date();
let firstTime = firstDate.getTime();

let firstName        = prompt("ESCRIBE TU PRIMER NOMBRE");
let secondName       = prompt("ESCRIBE TU SEGUNDO NOMBRE");
let fathersLastName  = prompt("ESCRIBE TU APELLIDO PATERNO");
let mothersLastName  = prompt("ESCRIBE TU APELLIDO MATERNO");

let lastDate = new Date();
let lastTime = lastDate.getTime();

let totalTime = (lastTime - firstTime) / 1000;

totalTime = totalTime.toFixed(0);

alert(`EN INTRODUCIR ${firstName.toUpperCase()} ${secondName.toUpperCase()} ${fathersLastName.toUpperCase()} ${mothersLastName.toUpperCase()} HAS TARDADO ${totalTime} segundos.`);
document.write(`EN INTRODUCIR ${firstName.toUpperCase()} ${secondName.toUpperCase()} ${fathersLastName.toUpperCase()} ${mothersLastName.toUpperCase()}HAS TARDADO ${totalTime} segundos.`);