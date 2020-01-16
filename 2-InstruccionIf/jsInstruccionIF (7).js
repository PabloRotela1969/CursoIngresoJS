function mostrar()
{
    //creo variable
    var edad;
    var estadoCivil;


    //tomo datos desde formulario 
    edad = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;

    //proceso
    if(edad < 18 && estadoCivil != "Soltero" )
    {
        alert("Es muy pequeño para no ser soltero");
    }

	


}//FIN DE LA FUNCIÓN