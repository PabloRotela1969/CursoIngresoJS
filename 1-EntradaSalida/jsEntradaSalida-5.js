/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    //creo variables
    var nombre;
    var edad;
    var concatenado_nombre_edad;

    // traigo valores de los números desde el formulario
    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;

    //armo el string concatenando nombre y edad
    concatenado_nombre_edad = "Usted se llama " + nombre + " y tiene " + edad + " años "

    /*
    console.log(nombre);
    console.log(edad);
    */
    // muestro el resultado por pantalla
    alert(concatenado_nombre_edad);
}

