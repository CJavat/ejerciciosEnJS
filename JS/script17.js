let texto = prompt("Escribe una cadena de texto.");
let textoSeparado = [];

for(let i=0; i<texto.length;i++) {
    textoSeparado[i] = texto[i];
}

document.write(textoSeparado.join('-'));