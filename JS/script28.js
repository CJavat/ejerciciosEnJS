alert("Programa que te mostrara el precio con el IVA incluido.");
let errorEnEntrada = false;

do {
    let precio = parseInt(prompt("ESCRIBE EL PRECIO DEL PRODUCTO."));
    let iva = parseInt(prompt("ESCRIBE EL IVA DEL PRODUCTO"));
    console.log(iva);
    if(isNaN(precio)) {
        alert("ERROR! - Deben ser numeros los valores que debes escribir.");
        errorEnEntrada = true;
    }
    else {
        precioConIVA(precio, iva);
        errorEnEntrada = false;
    }
}while(errorEnEntrada === true);


function precioConIVA (precioProducto, ivaProducto) {
    if(isNaN(ivaProducto)) {
        precioProducto += precioProducto * 0.21;
        alert("EL PRECIO CON IVA INCLUIDO ES: " + precioProducto);
        document.write("EL PRECIO CON IVA INCLUIDO ES: " + precioProducto);
    }
    else {
        ivaProducto = ivaProducto/100;
        precioProducto += precioProducto * ivaProducto;
        alert("EL PRECIO CON IVA INCLUIDO ES: " + precioProducto);
        document.write("EL PRECIO CON IVA INCLUIDO ES: " + precioProducto);
    }
}