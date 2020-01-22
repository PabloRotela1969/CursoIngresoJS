// ejercici 8
function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta=true;
	// entro todas las veces al bucle
	while(respuesta)
	{
		//pido un ingreso
		var numero = prompt("Ingrese un numero");

		// valido el ingreso
		while(isNaN(numero))
		{
			// si NO ES UN NÙMERO, pido un ingreso mostrando cartel de error
			numero = prompt("Error,número inválido");
			
		}
		// si es un número me aseguro que sea entero
		numero = parseInt(numero);
		// si es positivo , sumo
		if(numero > 0 )
		{
			positivo += numero;
		}
		else 
		{
			// sino es cero o negativo, pero como necesito multiplicar, 
			// excluyo al cero y multiplico
			if ( numero != 0)
			{
				negativo *= numero;
				contador++;
			}
		}
		// pregunto si quieren continuar para el while externo
		respuesta = confirm("¿Desea continuar?");
	}

	// corrijo por si no ingresé ningun valor negativo, muestro 0
	if (contador == 0)
	{
		negativo = 0;
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN