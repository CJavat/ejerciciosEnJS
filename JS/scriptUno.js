alert("Digita tu edad y te diré si eres apto para manejar.")
let edad = parseInt(prompt("Escribe tu edad."));
let edadValida = 18 - edad;

if(edad >= 18) {
    document.write("¡FELICIDADES! - YA PUEDES CONDUCIR." + "<br>")
    document.write(`Tienes ${edad} años. La edad permitida para conducir es de 18 años.`)
}
else {
    document.write("LO SIENTO, AUN NO ERES APTO PARA CONDUCIR." + "<br>");
    document.write(`Tienes ${edad} años, te hacen falta ${edadValida}.`)
}