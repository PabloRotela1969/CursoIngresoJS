function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	while(numero < 0 || numero > 9 || isNaN(numero))
	{
		if(isNaN(numero))
		{
			alert("No ingresó un número");

		}
		else
		{
			if(numero < 0)
			{ 
				alert("ingresó numero menor que cero");
			}
			if (numero > 9)
			{
				alert("Ingresó un numero mayora nueve");

			}
		}
		numero = prompt("ingrese un NUMERO entre 0 y 9.");

	}
	numero = parseInt(numero);
	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN