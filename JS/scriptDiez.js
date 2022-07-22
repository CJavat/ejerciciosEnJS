alert("Programa que te mostrará una tabla y su contenido sera la multiplicación en orden descendente");
let filasUsuario = parseInt(prompt("Escribe el número de FILAS."));
let columnasUsuario = parseInt(prompt("Escribe el número de COLUMNAS."));

let multiplicacion = filasUsuario*columnasUsuario;
document.write("<table border>")
for(let fila=0; fila<filasUsuario; fila++) {
    document.write("<tr>");
    for(let columna=0; columna<columnasUsuario; columna++) {
        document.write("<td>");
        document.write(multiplicacion);
        multiplicacion--;
        document.write("</td>")
    }
    document.write("</tr>");
}
document.write("</table>");

document.write(
    `<style>
        table {
            background-color: #111;
            color: white;
            font-size: 5rem;
            text-align: center;
            border: 2px solid #eee;
        }
    <style>
    `
);