function mostrar()
{
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    var criticaDelMes;

    if (mesDelAño == "Febrero")
    {
        criticaDelMes = "Este mes no tiene más de 29 días";
    }
    else
    {
        criticaDelMes = "Este mes tiene 30 o más días";
    }

    alert(criticaDelMes);
        
	


}//FIN DE LA FUNCIÓN