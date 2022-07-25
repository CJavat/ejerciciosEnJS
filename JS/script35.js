alert("FECHA 30, 60 Y 90 DÍAS DESPUÉS.");

let months = ["Enero", "Febrero", "Marzo", "Abril", "MAyo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let dayUser   = prompt("INTRODUCE EL DÍA.");
let monthUser = prompt("INTRODUCE EL MES.");
let yearUser  = prompt("INTRODUCE EL AÑO.");

let formatDate      = new Date(yearUser, monthUser-1, dayUser);
let thirtyDaysLaterDate = new Date(yearUser, monthUser-1, dayUser);
let sixtyDaysLaterDate  = new Date(yearUser, monthUser-1, dayUser);
let ninetyDaysLaterDate = new Date(yearUser, monthUser-1, dayUser);

thirtyDaysLaterDate.setDate(thirtyDaysLaterDate.getDate() + 30);
sixtyDaysLaterDate.setDate(sixtyDaysLaterDate.getDate() + 60);
ninetyDaysLaterDate.setDate(ninetyDaysLaterDate.getDate() + 90);

let thirtyDaysMonth = thirtyDaysLaterDate.getMonth() + 1;
let sixtyDaysMonth  = sixtyDaysLaterDate.getMonth() + 1;
let ninetyDaysMonth = ninetyDaysLaterDate.getMonth() +1;

let actuallyDate    = (`${dayUser}/${monthUser}/${yearUser}`);
let thirtyDaysLater = thirtyDaysLaterDate.getDate() + "/" + thirtyDaysMonth + "/" + thirtyDaysLaterDate.getFullYear();
let sixtyDaysLater  = sixtyDaysLaterDate.getDate() + "/" + sixtyDaysMonth + "/" + sixtyDaysLaterDate.getFullYear();
let ninetyDaysLater = ninetyDaysLaterDate.getDate() + "/" + ninetyDaysMonth + "/" + ninetyDaysLaterDate.getFullYear();


alert(`FECHA INTRODUCIDA: ${actuallyDate}, 30 DÍAS DESPUÉS: ${thirtyDaysLater}, 60 DÍAS DESPUÉS: ${sixtyDaysLater}, 90 DÍAS DESPUÉS: ${ninetyDaysLater}`);
document.write(`FECHA INTRODUCIDA: ${actuallyDate} <br>30 DÍAS DESPUÉS: ${thirtyDaysLater} <br>60 DÍAS DESPUÉS: ${sixtyDaysLater} <br>90 DÍAS DESPUÉS: ${ninetyDaysLater}`);