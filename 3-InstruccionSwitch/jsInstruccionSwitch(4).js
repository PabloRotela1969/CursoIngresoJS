function mostrar()
{
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    var cantidadDias;
    
    switch(mesDelAño)
    {
        case "Enero":
            cantidadDias = 31;
        break;
        case "Febrero":
             cantidadDias = 29;
            break;
        case "Marzo":   
            cantidadDias = 31;
            break;
        case "Abril":
            cantidadDias = 30;
            break;
        case "Mayo":
            cantidadDias = 31;
            break;
        case "Junio":
            cantidadDias = 30;
            break;            
        case "Julio":
            cantidadDias = 31;
            break;
        case "Agosto":    
            cantidadDias = 31;       
            break;
        case "Septiembre":
            cantidadDias = 30;
            break;
        case "Octubre":
            cantidadDias = 31;
            break;
        case "Noviembre":
            cantidadDias = 30;
            break;
        case "Diciembre":
            cantidadDias = 31;
            break;
    }
	cantidadDias = mesDelAño + " tiene " + cantidadDias.toString() +" días";
    alert(cantidadDias);

}//FIN DE LA FUNCIÓN