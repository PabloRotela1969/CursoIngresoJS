function mostrar()
{
    var veces = prompt("Ingrese un numero de veces a repetir Hola UTN FRA");
    var cantidad = 0;
    if ( !isNaN(veces))
    {
        veces = parseInt(veces);
        
        for(cantidad; cantidad <= veces; cantidad++)
        {
            //alert("Hola UTNFRA");
            document.write("Hola UTN FRA <BR>");
        }
    }

}//FIN DE LA FUNCIÓN