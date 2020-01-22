function mostrar()
{
    /*
    var contador = 0;
    var clave = prompt("ingrese el número clave.");
    while (clave.toLocaleLowerCase() != "utn750" )
    {
        contador++;
        clave = prompt("ERROR 405: Vuelva a ingrese el número clave." + contador.toString() + " vez ingresada");
        if (contador > 1)
        {
            alert("HA INGRESADO 3 VECES MAL LA CLAVE, contactese con el administrador");
            break;
        }
        

    }
    */
    var clave;
    var cantidadFallidos = 0;
    var mensaje = "Ingrese la clave";
    do
    {
        clave = prompt(mensaje);
        if( clave != "utn750" )
        {
            cantidadFallidos++;
        }
        else
        {
            cantidadFallidos = 0;
        }

        if( cantidadFallidos > 0)
        {
            mensaje = "Incorrecto, ingresó "+ cantidadFallidos.toString() + " veces mal";

        }
        
    }
    while(clave != "utn750");

}//FIN DE LA FUNCIÓN
