let cadenaDeTexto = prompt("Escribe una cadena de texto.");
let cadenaExtraida = "";
let posicionPrimerParentesis = 0, posicionUltimoParentesis = 0;

posicionPrimerParentesis = cadenaDeTexto.indexOf("(");
posicionUltimoParentesis = cadenaDeTexto.lastIndexOf(")");

/* if(posicionPrimerParentesis == -1 & posicionUltimoParentesis == -1) {

}
else if() {

}
else if() {

}
else {

} */

cadenaExtraida = cadenaDeTexto.substring(posicionPrimerParentesis+1,posicionUltimoParentesis)

console.log(`PRIMER PARTENTESIS: ${posicionPrimerParentesis}, Y POSICION ULTIMO PARENTESIS: ${posicionUltimoParentesis}`);
console.log(cadenaExtraida);
document.write(cadenaExtraida);


/* for(let i=0; i<cadenaDeTexto.length; i++) {
    if(cadenaDeTexto[i] == "(") {

        cadenaExtraida[i] = cadenaDeTexto[i];
        if(cadenaDeTexto) {

        }
        else {
            
        }
    }
    else {

    }
} */


