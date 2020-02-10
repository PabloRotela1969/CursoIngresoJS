function mostrar()
{
	var resultado;
	var mensaje;

	//Genero el número RANDOM entre 1 y 10 
	resultado = (Math.random() * 10) + 1;
	
	//tomo la parte entera
	resultado = parseInt(resultado);

	//evalúo el número generado
	if(resultado < 5)
	{
		mensaje = "Vamos, la próxima se puede";
	}
	else {
			if(resultado > 4 && resultado < 10)
			{
				mensaje = "Aprobó";
			}
			else
			{
				mensaje = "Excelente";
			}
		}
	//muestro
	alert(mensaje);
	

}//FIN DE LA FUNCIÓN