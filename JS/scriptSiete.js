let rango = parseInt(prompt("Escribe hasta que número quieres que te forme la pirámide."));

for(let i=rango; i>0; i--) {
    let numerosPiramide = i;
    while(numerosPiramide > 0) {
        document.write(i);
        numerosPiramide--;
    }
    document.write("<br>");
}