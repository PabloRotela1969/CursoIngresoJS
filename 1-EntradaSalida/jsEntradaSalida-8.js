/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    // creo variables
    var primero;
    var segundo;
    var operacion;

    // traigo el dividendo
    primero = document.getElementById("numeroDividendo").value;
    // traigo el divisor
    segundo = document.getElementById("numeroDivisor").value;
    // transformo tanto dividendo como divisor
    primero = parseInt(primero);
    segundo = parseInt(segundo);

    // efectúo el MOD de primero y segundo
    operacion = primero % segundo;

    // lo transformo a string para poder concatenarlo al mensaje
    operacion = operacion.toString();

    // muestro el valor tipo string concatenado al mensaje
    alert("El resto es " + operacion);
}
