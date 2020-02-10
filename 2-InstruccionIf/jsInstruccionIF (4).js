function mostrar()
{
//creo variable
var edad;
var resultado;
//tomo la edad  
edad = document.getElementById("edad").value;

//proceso
if(edad > 12 && edad < 18){
    resultado = "Adolescente";
    alert(resultado);
}


}//FIN DE LA FUNCIÓN