/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var primero;
    var segundo;
    var descuento;
    var resultado;
    primero = document.getElementById("importe").value;
    primero = parseInt(primero);
    descuento = primero * 0.25;
    resultado = primero - descuento;
    document.getElementById("resultado").value = resultado;
}
