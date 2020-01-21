function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	respuesta = prompt("Ingrese números, Igrese NO para terminar");
	respuesta = respuesta.toUpperCase();
	while(respuesta != "NO")
	{
		if ( !isNaN(respuesta))
		{
			acumulador += parseInt(respuesta);
			contador++;
			respuesta = prompt("Ingrese números, Igrese NO para terminar");
			respuesta = respuesta.toUpperCase();
		}
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN