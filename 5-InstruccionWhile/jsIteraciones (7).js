function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	respuesta = prompt("Ingrese números, Igrese NO para terminar");
	while(respuesta != "NO")
	{
		acumulador += parseInt(respuesta);
		contador++;
		respuesta = prompt("Ingrese números, Igrese NO para terminar");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN