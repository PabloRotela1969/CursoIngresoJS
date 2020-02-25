/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
    var maximo = 4;
    var minimo = 1;
    eleccionMaquina = (Math.floor(Math.random() * (maximo - minimo) + minimo));
    //alert(eleccionMaquina);
    // NO ENTIENDO COMO SE PUEDE EMPATAR EN ESTE JUEGO

}//FIN DE LA FUNCIÓN
function piedra()
{
    if(eleccionMaquina == 1)
    {
        alert("Ganó");
    }
    else
    {
        alert("Perdió");
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    if(eleccionMaquina == 2)
    {
        alert("Ganó");
    }
    else
    {
        alert("Perdió");
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
    if(eleccionMaquina == 3)
    {
        alert("Ganó");
    }
    else
    {
        alert("Perdió");
    }	

}//FIN DE LA FUNCIÓN