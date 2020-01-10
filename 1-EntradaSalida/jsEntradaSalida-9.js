/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    // creo variables
    var primero;
    var segundo;
    var resultado;

    // busco el valor del sueldo
    primero = document.getElementById("sueldo").value;

    // transformo el valor a número
    primero = parseInt(primero);

    // calculo el 10% del sueldo
    resultado = primero * 1.1;

    // muestro por formulario el valor calculado
    document.getElementById("resultado").value = resultado;
    
}
