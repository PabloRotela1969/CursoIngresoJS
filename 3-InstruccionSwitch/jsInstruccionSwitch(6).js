function mostrar()
{
//tomo la edad  
    var momentoDia;
    var laHora = document.getElementById('hora').value;
    laHora = parseInt(laHora);
    
    switch(laHora)
    {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            momentoDia = "Es de noche";
            break;
        case 7:
        case 8: 
        case 9:
        case 10:
        case 11:
            momentoDia = "Es de mañana";
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            momentoDia ="Es de tarde";
            break;
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
            momentoDia = "Es de noche";
             break;
        default:
            momentoDia = "La hora no existe";
            break;
    }



    alert(momentoDia);

}//FIN DE LA FUNCIÓN