/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    // Declaración de variables
    var primero;
    var segundo;
    var descuento;
    var resultado;

    // instancio valor del importe
    primero = document.getElementById("importe").value;

    // transformo a entero el importe
    primero = parseInt(primero);

    // calculo el descuento
    descuento = primero * 0.25;

    // al importe le resto el descuento
    resultado = primero - descuento;

    // muestro resultado en el textbox 
    document.getElementById("resultado").value = resultado;
    
}
