do {
    alert("Te mostraremos la serie de FIBONACCI hasta el numero que quieras. ('Maximo hasta el numero 100')");
    let numeroFibonacci = prompt("Escribe un numero entre el 1 y el 100.");
    let fibonacci1 = 0;
    let fibonacci2 = 1;
    let numeroSumado = 0;
    
    document.write(`<h1>La serie FIBONACCI es:</h1>`);

    if(numeroFibonacci >= 0 & numeroFibonacci <= 100) {
        document.write(`<span class='numeroFibonacci'>${numeroSumado}</span>` + "<br>");
        do {
            numeroSumado = fibonacci1 + fibonacci2;
            document.write(`<span class='numeroFibonacci'>${numeroSumado}</span>` + "<br>");
            document.write(`
                <style>
                    .numeroFibonacci {
                        font-size: 2rem;
                        display: block;
                        text-align: center;
                    }
                    .numeroFibonacci:nth-child(odd) {
                        background-color: lightblue;
                    }
                    .numeroFibonacci:nth-child(even) {
                        background-color: lightcoral;
                    }
                </style>
            `);
            fibonacci1 = fibonacci2;
            fibonacci2 = numeroSumado;
        }while(numeroSumado < numeroFibonacci);
        numeroCorrecto = true;
    }
    else {
        alert("ERROR - El numero debe estar dentro del rango (0-100)");
        numeroCorrecto = false;
    }
}while(numeroCorrecto === false);
