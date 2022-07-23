let cadenaDeTexto = prompt("Escribe una cadena de texto.");
let cadenaExtraida = "";
let posicionPrimerParentesis = 0, posicionUltimoParentesis = 0;
let textSize = cadenaDeTexto.length;

posicionPrimerParentesis = cadenaDeTexto.indexOf("(");
posicionUltimoParentesis = cadenaDeTexto.lastIndexOf(")");

if(posicionPrimerParentesis == -1 & posicionUltimoParentesis == -1) {
    document.write("");
}
else if(posicionPrimerParentesis != -1 & posicionUltimoParentesis == -1 ) {
    cadenaExtraida = cadenaDeTexto.substring(posicionPrimerParentesis+1,textSize);
    document.write(cadenaExtraida);
}
else {
    cadenaExtraida = cadenaDeTexto.substring(posicionPrimerParentesis+1,posicionUltimoParentesis)
    document.write(cadenaExtraida);

}