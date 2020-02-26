function mostrar()
{
    var pruebaDivisor;
    var primo = true;
    var contador;
    var numero = prompt(" Ingrese un numero ");
    if(!isNaN(numero))
    {
        numero = parseInt(numero);
        contador = numero - 1;
        for ( contador; contador > 1; contador--)
        {
            pruebaDivisor = numero % contador;
            if(pruebaDivisor == 0)
            {
                primo = false;
            }
        }
        if (primo)
        {
            alert("El numero " + numero.toString() + " es PRIMO");
        }
        else
        {
            alert("NO ES PRIMO");
        }
    }



}//FIN DE LA FUNCIÓN