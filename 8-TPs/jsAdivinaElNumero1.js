/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
    // de esta forma parametrizo el rango de números a la función RANDOM 
    var min = 1;
    var max = 101;
    contadorIntentos = 0;
    numeroSecreto = Math.floor(Math.random() * (max - min) + min);
    //alert(numeroSecreto );
    document.getElementById("numero").value = "";
    document.getElementById("intentos").value = "";
    

}

function verificar()
{
    //extraigo el numero desde el campo
    var numeroIngresadoPorJugador = document.getElementById("numero").value;

    // creo la variable
    var diferenciaNumeroGeneradoContraIngresado = 0;

    //cada vez que pulsen el boton, se incrementará el intento
    contadorIntentos++;
    // en todos los casos, muestro el contador de intentos
    document.getElementById("intentos").value = contadorIntentos;

    // si ingresaron algo distinto al vacío o si es un número, proceso
    if ( numeroIngresadoPorJugador != "" && !isNaN(numeroIngresadoPorJugador) )
    {
      // ahora que sé que es un número, parseo a entero
      numeroIngresadoPorJugador = parseInt(numeroIngresadoPorJugador);

      
      // analizo el número ingresado contra el generado
      if(numeroIngresadoPorJugador == numeroSecreto)
      {
        alert("Usted es un ganador!! y en solo " + contadorIntentos.toString() + " intentos");
      }
      else
      {
        // si no son iguales, calculo la diferencia
        diferenciaNumeroGeneradoContraIngresado = numeroIngresadoPorJugador - numeroSecreto;

        // si es un negativo
        if ( diferenciaNumeroGeneradoContraIngresado < 0)
        {
          // quito el signo negativo
          diferenciaNumeroGeneradoContraIngresado = -1 * diferenciaNumeroGeneradoContraIngresado;
          // y muestro cartelito
          alert(" Le falta " + diferenciaNumeroGeneradoContraIngresado.toString() + " para llegar al numero");
        }
        else
        {
          // si es positivo, muestro cartelito de diferencia
          alert( "Le sobra " + diferenciaNumeroGeneradoContraIngresado.toString() + " para llegar al numero");
        }


      }

    }


	
}