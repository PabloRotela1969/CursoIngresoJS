function mostrar()
{
    //creo variable
    var edad;
    var estadoCivil;


    //tomo datos desde formulario 
    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;

    //proceso
    if(edad > 17 && estadoCivil == "Soltero" )
    {
        alert("Es soltero y no es menor");
    }


	


}//FIN DE LA FUNCIÓN