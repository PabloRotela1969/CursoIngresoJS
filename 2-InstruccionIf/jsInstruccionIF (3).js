function mostrar()
{
    //creo variable
    var edad;
    var resultado;
    //tomo la edad  
    edad = document.getElementById("edad").value;

    //proceso
    if(edad > 0 && edad < 18){
        resultado = "menor de edad";
    }
    else{
        resultado = "mayor de edad";
    }

    //muestro respuesta
    alert(resultado);

}//FIN DE LA FUNCIÓN