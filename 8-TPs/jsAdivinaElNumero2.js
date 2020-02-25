/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

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
	var mensaje;
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
			switch(contadorIntentos)
			{
				case 1:
					mensaje = "Usted es un psiquico";
					break;

				case 2:
					mensaje = "Excelente percepción";
					break;
					
				case 3:
					mensaje = "Esto es suerte";
					break;
				case 4:
					mensaje = "Excelente técnica";
					break;
				case 5:
					mensaje = "Usted está en la media";
					break;

				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
					mensaje = "Falta técnica";
					break;
				default:
					mensaje = "Afortunado en el amor";
					break;
			}
			alert(mensaje);
      }

    }


	
}