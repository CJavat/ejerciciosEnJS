do {
    let rango = parseInt(prompt("Digita el número de rango para mostrarte la pirámide. (No debe ser un número mayor a 50)."));
    
    if(rango > 50) {
        alert("¡ERROR! - Solo se aceptan numeros menores que 50.")
    }
    else {
        for(let i=1; i<=rango; i++) {
            let numeroDeVueltas = 1;
            while(numeroDeVueltas <= i) {
                document.write(numeroDeVueltas);
                numeroDeVueltas++;
            }
            document.write("<br>")
        }
        alert("¡FELICIDADES! - Se calculó con éxito la pirámide. (Dale cancelar en el siguiente mensaje para ver el resultado).");
    }
}while(confirm("¿Quieres repetir el programa?"));