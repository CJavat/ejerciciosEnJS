alert("RELOJ");
let clock = 0;
let frecuency = 1000;


function update() {
    let now = new Date();
    let date = now.getDate() + '-' + (now.getMonth()+1) + '-' + now.getFullYear();
    let hour = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    let write = 'Hoy es ' + date + ' y son las ' + hour + ' horas';
    document.getElementById('reloj').innerHTML = write;
    clock = setTimeout("update()", frecuency);
}
