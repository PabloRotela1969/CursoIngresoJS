/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //variables
    var largo;
    var ancho;
    var alambre;

    //cargo valores
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    //parseo
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    // calculo
    alambre = (largo * ancho) * 3;

    //muestro
    alert(alambre);

}
function Circulo () 
{
    //variables
    var radio;
    var pi;
    var alambre;

    //cargo valores
    radio = document.getElementById("Radio").value;
    pi = Math.PI;

    //parseo
    radio = parseInt(radio);

    // calculo
    alambre = (2 * radio * pi) * 3;

    //muestro
    alert(alambre);	
}
function Materiales () 
{
    //variables
    var largo;
    var ancho;
    var area;
    var cemento;
    var cal;
    var respuesta;

    //cargo valores
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    //parseo
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    // calculo
    area = (largo * ancho);
    cemento = area * 2;
    cal = area * 3;
    respuesta = "Necesitará " + cemento.toString() + " de cemento y " + cal.toString() + " de cal";

    //muestro
    alert(respuesta);
}