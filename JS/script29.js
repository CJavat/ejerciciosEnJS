alert ("TE MOSTRAREMOS EL TEXTO AL REVÉS");

let text = prompt("Escribe una frase o palabra.");

flipText(text);


function flipText(phrase) {
    let textReverse = "";
    
    for(let i=text.length-1; i>=0; i--) {
    
        textReverse += text[i];
    }
    
    document.write(`El texto original es: ${text} <br>Y el texto al revés es: ${textReverse}`);
    alert(`El texto original es: ${text} Y el texto al revés es: ${textReverse}`);
}