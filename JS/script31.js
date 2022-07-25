alert("ÉSTOS SON 100 NÚMEROS ALEATORIOS SIN REPETIR DEL 1 AL 1,000");

noRepeatNumber();

function noRepeatNumber() {
    let randomCount = 0;
    let arrayRandom = [];

    do {
        let randomNumber = Math.floor(Math.random() * (1000 - 1) + 1);

        if(arrayRandom.indexOf(randomNumber) == -1) {
            arrayRandom[randomCount] = randomNumber;
            randomCount++;
        }
        else {
            randomCount--;
            console.log("NÚMERO REPETIDO.");
        } 
    }while(randomCount < 100);

    for(let i=0; i<arrayRandom.length; i++) {
        document.write(`Numero ${i+1}: ${arrayRandom[i]} <br>`) 
    }
}