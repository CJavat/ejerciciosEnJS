

let nombre = [3];
let edad = [3];
let nombresIntroducidos = 0;
let nombreCorrecto = true;
let edadCorrecta = true;
let salir = "";

do {
    do {
        nombre[nombresIntroducidos] = prompt(`Escribe el nombre del hermano #${nombresIntroducidos+1}` + "Escribe Salir si quieres terminar el programa.");
        salir = nombre[nombresIntroducidos].toUpperCase();
        
        salirFuncion(salir);
        salir = "";

        if(isNaN(nombre[nombresIntroducidos])) {
            nombreCorrecto = true;
            do {
                //edad[nombresIntroducidos] = parseInt(prompt(`Escribe la edad del hermano #${nombresIntroducidos+1}`));
                edad[nombresIntroducidos] = prompt(`Escribe la edad del hermano #${nombresIntroducidos+1}`);
                salir = edad[nombresIntroducidos].toUpperCase();
                parseInt(edad[nombresIntroducidos]);

                salirFuncion(salir);

                if(edad[nombresIntroducidos] === "" || isNaN(edad[nombresIntroducidos])) {
                    alert("¡ERROR! - Escribe un número. (No debe estar en blanco el espacio.)");
                    edadCorrecta = false;
                    edad[nombresIntroducidos] = null;
                }
                else {
                    edadCorrecta = true;
                }
            }while(edadCorrecta === false);
        }
        else {
            alert("¡ERROR! - Escribe letras. (No debe estar en blanco el espacio.)");
            nombre[nombresIntroducidos] = null;
            nombreCorrecto = false;
        }
    }while(nombreCorrecto === false);

    nombresIntroducidos++;
}while(nombresIntroducidos < 3);

let hermanoMayor = Math.max(edad[0], edad[1], edad[2])

if(hermanoMayor == edad[0]) {
    document.write(`<p class="hermanoMayor">EL HERMANO MAYOR ES ${nombre[0]}</p>`);
    estilosAlHermanoMayor();
}
else if(hermanoMayor == edad[1]) {
    document.write(`<p class="hermanoMayor">EL HERMANO MAYOR ES ${nombre[1]}</p>`);
    estilosAlHermanoMayor();
}
else if(hermanoMayor == edad[2]) {
    document.write(`<p class="hermanoMayor">EL HERMANO MAYOR ES ${nombre[2]}</p>`);
    estilosAlHermanoMayor();
}
else {
    document.write("<p class='errorInesperado'> ERROR - HUBO UN ERROR, INTENTALO OTRA VEZ.</p>");
    document.write(`
        <style>
            .errorInesperado {
                color: #f11;
                font-size: 4rem;
            }
        </style>
    `);
}


function salirFuncion(terminarPrograma) {
    if(terminarPrograma === "SALIR") {
        document.write("<p class='terminarPrograma'>SIN RESULTADOS - SALISTE DEL PROGRAMA.</p>");
        document.write(`
            <style>
                .terminarPrograma {
                    font-size: 5rem;
                    color: #f11;
                }
            </style>
        `);
        exit();
    }
}

function estilosAlHermanoMayor() {
    document.write (`
        <style>
            .hermanoMayor {
                color: #1f1;
                font-size: 4rem;
            }
        </style>
    `);
}