function mostrar()
{
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

}//FIN DE LA FUNCIÓN
