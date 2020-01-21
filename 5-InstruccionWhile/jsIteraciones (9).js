function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo = 0;
	var minimo = Infinity;
	var respuesta='si';
	respuesta = prompt("Ingrese un número o pulse NO para terminar");
	respuesta = respuesta.toLowerCase();
	while(respuesta != "no")
	{
		if(!isNaN(respuesta))
		{
			respuesta = parseInt(respuesta);
			if( respuesta > maximo)
			{
				maximo = respuesta;
			}
			
			if(respuesta <= minimo )
			{
				minimo = respuesta;
			}
			
		}
		respuesta = prompt("Ingrese un número o pulse NO para terminar");
		respuesta = respuesta.toLowerCase();
	}
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;



}//FIN DE LA FUNCIÓN