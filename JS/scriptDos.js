alert("¡BIENVENIDO! - te vamos a mostrar la calificación.");
let notaCorrecta = false;

do {
    let nota = parseInt(prompt("Escribre el número de tu calificación."));
    
    if(nota < 0 | nota > 10) {
        alert("Escribe una calificacion correcta. Debe estar entre 0 y 19.");
        notaCorrecta = false;
    }
    else {
        notaCorrecta = true;
        switch(nota) {
            
            case 0:
            case 1:
            case 2:
                document.write("Tu calificación es: <b> Muy deficiente</b>.");
                break;
            case 3:
            case 4:
                document.write("Tu calificación es: <b>Insuficiente</b>.");
                break;
            case 5:
                document.write("Tu calificación es: <b>Suficiente</b>.");
                break;
            case 6:
                document.write("Tu calificación es: <b>Buena</b>.");
                break;
            case 7:
            case 8:
                document.write("Tu calificación es: <b>Notable</b>.");
                break;
            case 9:
            case 10:
                document.write("Tu calificación es: <b>Sobresaliente</b>.");
                break;
        }
    }
}while(notaCorrecta === false);