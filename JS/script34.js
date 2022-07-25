alert("Te mostraremos el calendario del mes.");

let userMonth = prompt("ESCRIBE EL MES.");
let userYear  = prompt("ESCRIBE EL AÑO.");

let dateCalendar = new Date(userYear, userMonth-1);
let months       = ["Enero", "Febrero", "Marzo", "Abril", "MAyo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let weekDays     = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sàbado"];

let month   = dateCalendar.getMonth();
let year    = dateCalendar.getFullYear();

document.write(`${months[month].toUpperCase()} - ${year} <br>`);

do {
    let day     = dateCalendar.getDate();
    let weekDay = dateCalendar.getDay();

    document.write(`${day} (${weekDays[weekDay]})<br>`);
    dateCalendar.setDate(dateCalendar.getDate()+1);
    
}while(dateCalendar.getMonth() == userMonth-1);