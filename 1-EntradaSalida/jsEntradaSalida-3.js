/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    //declaro variable
    var dato;

    // traigo valor desde el formulario
    dato = document.getElementById("elNombre").value;

    // muestro el valor traído por un pop-up en pantalla
    alert(dato);
}


