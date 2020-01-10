/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var primero;
    var segundo;
    var resultado;
    primero = document.getElementById("sueldo").value;
    primero = parseInt(primero);
    resultado = primero * 1.1;
    document.getElementById("resultado").value = resultado;
    
}
