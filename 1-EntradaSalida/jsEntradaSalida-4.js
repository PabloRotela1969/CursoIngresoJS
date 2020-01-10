/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// declaro variable
	var dato;

	//paso el dato recolectado por el prompt desde el usuario a una variable
	dato = prompt("Ingrese un valor");

	//muestro el dato recolectado por el control del formulario adecuado
	document.getElementById("elNombre").value = dato;

}

