function mostrar()
{
//creo variable
var edad;
var resultado;
//tomo la edad  
edad = document.getElementById("edad").value;

//proceso
if(edad < 13 || edad > 17){
    resultado = "NO es Adolescente";
    alert(resultado);
}
 


}//FIN DE LA FUNCIÓN