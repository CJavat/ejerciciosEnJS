alert("FECHA Y HORA ACTUAL");

let weekdays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
let months    = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let fecha    = new Date();
let weekday  = fecha.getDay();
let day      = fecha.getDate();
let month    = fecha.getMonth();
let year     = fecha.getFullYear();
let hour     = fecha.getHours();
let minute   = fecha.getMinutes();


document.write(`Hoy es ${weekdays[weekday]}, ${day} de ${months[month]} del ${year} y son las ${hour}:${minute} horas.`);