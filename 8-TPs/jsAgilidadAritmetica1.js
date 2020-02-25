/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{

    var primerNumeroAlAzar;
    var segundoNumeroAlAzar;
    var operacionNumero;
    var operacion;
    var cantidadNumeros = 10;
    var cantidadOperaciones = 4;
    primerNumeroAlAzar = Math.floor((Math.random() * cantidadNumeros) + 1);
    operacionNumero = Math.floor((Math.random() * cantidadOperaciones) + 1);
    segundoNumeroAlAzar = Math.floor((Math.random() * cantidadNumeros) + 1);
    switch(operacionNumero)
    {
        case 1:
            operacion = "+";
            respuesta = primerNumeroAlAzar + segundoNumeroAlAzar;
            break;
        case 2:
            operacion = "-";
            respuesta = primerNumeroAlAzar - segundoNumeroAlAzar;
            break;
        case 3:
            operacion = "*";
            respuesta = primerNumeroAlAzar * segundoNumeroAlAzar;
            break;
        case 4:
            operacion = "/";
            respuesta = primerNumeroAlAzar / segundoNumeroAlAzar;
            break;
    }
    document.getElementById("PrimerNumero").value = primerNumeroAlAzar;
    document.getElementById("Operador").value = operacion;
    document.getElementById("SegundoNumero").value = segundoNumeroAlAzar;

}//FIN DE LA FUNCIÓN
function Responder()
{
    var respuestaIngresada = document.getElementById("Respuesta").value;
    if(respuestaIngresada != "" & !isNaN(respuestaIngresada))
    {
        respuestaIngresada = parseInt(respuestaIngresada);
        if (respuestaIngresada == respuesta)
        {
            alert("Correcto!!");
        }
        else
        {
            alert("MAL, demasiado maal, terrible");
        }
    }
    
}//FIN DE LA FUNCIÓN
