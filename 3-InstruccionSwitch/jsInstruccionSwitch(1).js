function mostrar()
{
    var mensaje;
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//proceso el mes
switch(mesDelAño){
    case "Enero":
        mensaje =  "que comiences bien el año!!!.";
        break;
    case "Marzo":
        mensaje = "a clases!!!.";
        break;
    case "Julio":
        mensaje = "se vienen las vacaciones!!!.";
        break;
    case "Diciembre":
        mensaje = "Felices fiestas!!!.";
        break;
}

// muestro mensaje
if (mensaje != undefined) alert(mensaje);



}//FIN DE LA FUNCIÓN