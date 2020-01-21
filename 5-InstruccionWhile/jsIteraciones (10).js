function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var Sumapositivos=0;
	var Sumanegativos=0;
	var cantidadNegativos=0;
	var cantidadPosiivos= 0;
	var cantidadCeros=0;
	var par= 0;
	var cantidadPares= 0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var negativosMenosPositivos= 0;
	var respuesta="si";
	respuesta = prompt("Ingrese un número o pulse NO para terminar");
	respuesta = respuesta.toLowerCase();

	while(respuesta!="no")
	{
		if( !isNaN(respuesta) )
		{
			respuesta = parseInt(respuesta);
			if( respuesta > 0)
			{
				Sumapositivos += respuesta;
				cantidadPosiivos++;
				promedioPositivos = Sumapositivos / cantidadPosiivos;
			}
			else
			{
				if ( respuesta == 0 )
				{
					cantidadCeros++;
				}
				else
				{
					Sumanegativos += respuesta;
					cantidadNegativos++;
					promedioNegativos = Sumanegativos / cantidadNegativos;

				}
				
			}

			par = respuesta % 2;// si esto da 0 o sea , no hay resto, es par
			if ( 0 == par)
			{
				cantidadPares++;
			}


			negativosMenosPositivos = Sumapositivos + Sumanegativos;

		}
		respuesta = prompt("Ingrese un número o pulse NO para terminar");
		respuesta = respuesta.toLowerCase();	
	
	}


	alert( "La suma de los positivos " + Sumapositivos.toString() );
	alert( "La suma de los negativos " +  Sumanegativos.toString() );
	alert( "La cantidad de negativos " + cantidadNegativos.toString() );
	alert( "La cantidad de positivos " +cantidadPosiivos.toString() );
	alert( "La cantidad de ceros " +cantidadCeros.toString() );
	alert( "La cantidad de pares " + cantidadPares.toString() );
	alert( "El promedio de los positivos  " + promedioPositivos.toString() );
	alert("El promedio de los negativos " +  promedioNegativos.toString() );
	alert(" Diferencia entre negativos y positivos " + negativosMenosPositivos.toString() );



}//FIN DE LA FUNCIÓN