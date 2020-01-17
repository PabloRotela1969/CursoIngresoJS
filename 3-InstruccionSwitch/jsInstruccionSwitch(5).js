function mostrar()
{
//tomo la edad  
    var momentoDia;    
    var laHora = document.getElementById('hora').value;
    laHora = parseInt(laHora);
    
    switch(laHora)
    {

        case 7:
        case 8: 
        case 9:
        case 10:
        case 11:
            momentoDia = "Es de mañana";
            break;
 
        default:
            momentoDia = "No es de mañana";
            break;
    }
    alert(momentoDia);


	



}//FIN DE LA FUNCIÓN