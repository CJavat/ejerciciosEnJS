alert("¡Hola!, éste es un programa que te mostrará una pirámide de números.")
for(let i=1; i<=30; i++) {
    let vueltas = 0;
    while(vueltas < i) {
        document.write(i);
        vueltas++;
    }
    document.write("<br>")
}