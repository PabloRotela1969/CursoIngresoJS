/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var primero;
    var segundo;
    var operacion;
    primero = document.getElementById("numeroUno").value;
    segundo = document.getElementById("numeroDos").value;
    primero = parseInt(primero);
    segundo = parseInt(segundo);
    operacion = primero + segundo;
    operacion = operacion.toString();
    alert("La suma es " + operacion);

}

function restar()
{
    var primero;
    var segundo;
    var operacion;
    primero = document.getElementById("numeroUno").value;
    segundo = document.getElementById("numeroDos").value;
    primero = parseInt(primero);
    segundo = parseInt(segundo);
    operacion = primero - segundo;
    operacion = operacion.toString();
    alert("La resta es " + operacion);
}

function multiplicar()
{ 
    var primero;
    var segundo;
    var operacion;
    primero = document.getElementById("numeroUno").value;
    segundo = document.getElementById("numeroDos").value;
    primero = parseInt(primero);
    segundo = parseInt(segundo);
    operacion = primero * segundo;
    operacion = operacion.toString();
    alert("La multiplicación es " + operacion);
}

function dividir()
{
    var primero;
    var segundo;
    var operacion;
    primero = document.getElementById("numeroUno").value;
    segundo = document.getElementById("numeroDos").value;
    primero = parseInt(primero);
    segundo = parseInt(segundo);
    operacion = primero / segundo;
    operacion = operacion.toString();
    alert("La división es " + operacion);
}

