/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var primero;
    var segundo;
    var operacion;
    primero = document.getElementById("numeroDividendo").value;
    segundo = document.getElementById("numeroDivisor").value;
    primero = parseInt(primero);
    segundo = parseInt(segundo);
    operacion = primero % segundo;
    operacion = operacion.toString();
    alert("El resto es " + operacion);
}
