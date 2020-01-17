function mostrar()
{
    //tomo el mes  
    var mesDelAño = document.getElementById('mes').value;
    var consejo;

    switch(mesDelAño)
    {
        case "Enero":
        case "Febrero":
        case "Marzo":   
        case "Abril":
        case "Mayo":
        case "Junio":
            consejo = "Falta para el invierno";
            break;
        case "Julio":
        case "Agosto":
            consejo = "Abrigate que hace frío";
            break;
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            consejo = "Ya pasamos el frío, ahora calor!!!";
            break;
    }       

    alert (consejo);




}//FIN DE LA FUNCIÓN