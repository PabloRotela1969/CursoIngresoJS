function mostrar()
{

	var contador;
	// declarar variables
	var maximo;
	var minimo;
	var respuesta='si';
	respuesta = prompt("Ingrese un número o pulse NO para terminar");
	respuesta = respuesta.toLowerCase();
	while(respuesta != "no")
	{

		if(!isNaN(respuesta))
		{
			respuesta = parseInt(respuesta);
			if ( contador == 0)
			{
				maximo = respuesta;
				minimo = respuesta;
				contador = 2;
			}
			else
			{

				if( respuesta > maximo)
				{
					maximo = respuesta;
				}
				
				if(respuesta <= minimo )
				{
					minimo = respuesta;
				}
			}
		}
		respuesta = prompt("Ingrese un número o pulse NO para terminar");
		respuesta = respuesta.toLowerCase();
	}
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;



}//FIN DE LA FUNCIÓN