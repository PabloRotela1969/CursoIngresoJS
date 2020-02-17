function mostrar()
{

	var contador=0;
	var acumulador=0;
	var subtotal = 0;
	while ( contador < 5 )
	{
		acumulador = prompt("Ingrese un numero:");
		acumulador = parseInt(acumulador);
		subtotal += acumulador;
		contador++;

	}


acumulador = subtotal;
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN