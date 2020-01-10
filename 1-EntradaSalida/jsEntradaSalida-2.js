/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    // creo una variable
    var dato_texto;

    // meto el valor que el usuario ingrese , en una variable
    dato_texto = prompt("Ingrese un valor");

    // muestro esa variable por un alert
    alert(dato_texto);
    
    /*
    ESTO ES LO QUE NO SE DEBE HACER
    alert(prompt("Ingrese valor"));
    */
}

