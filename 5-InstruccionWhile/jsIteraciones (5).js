function mostrar()
{

    var sexo = prompt("ingrese f ó m .");
    
    while(!((sexo.toLocaleLowerCase() == 'f') || (sexo.toLocaleLowerCase() == 'm')))
    {
        sexo = prompt("ingrese f ó m .");
    }

    if ( sexo == "f")
    {
        sexo = "Femenino";
    }
    else
    {
        sexo = "Masculino";
    }

    document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN