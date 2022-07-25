alert("Número aleatorio entre los números que índiques");
do {
    let correct = true;
    let minNumber = 1;
    let maxNumber = 100;

    minNumber = parseInt(prompt("ESCRIBE EL NÚMERO MÍNIMO."));
    maxNumber = parseInt(prompt("ESCRIBE EL NÚMERO MÁXIMO."));

    if(isNaN(minNumber) | isNaN(maxNumber)) {
        alert("ERROR - INGRESA SOLO NUMEROS.");
        correct = false;
    }
    else {
        correct = true;
        randomNumber(minNumber, maxNumber);
    }
}while(correct === false);

function randomNumber(min, max) {
    randNum = Math.round(Math.random()*(max-min)+min);
    alert(randNum);
    document.write(`EL NÚMERO RANDOM ALEATORIO ES: ${randNum} <br>`);
}