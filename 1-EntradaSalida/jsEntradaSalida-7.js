/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    //creo variables	
    var primero;
    var segundo;
    var operacion;

    // traigo valores de los números desde el formulario
    primero = document.getElementById("numeroUno").value;
    segundo = document.getElementById("numeroDos").value;

    // transformo los números traídos a enteros para poder operar
    primero = parseInt(primero);
    segundo = parseInt(segundo);

    //efectúo la operación que me manda el nombre de la función
    operacion = primero + segundo;

    // transformo el resultado a string para concatenarlo al mensaje
    operacion = operacion.toString();

    // muestro el resultado string concatenado al mensaje
    alert("La suma es " + operacion);

}

function restar()
{
    //creo variables
    var primero;
    var segundo;
    var operacion;
    
    // traigo valores de los números desde el formulario
    primero = document.getElementById("numeroUno").value;
    segundo = document.getElementById("numeroDos").value;

    // transformo los números traídos a enteros para poder operar
    primero = parseInt(primero);
    segundo = parseInt(segundo);
    
    //efectúo la operación que me manda el nombre de la función
    operacion = primero - segundo;
    
    // transformo el resultado a string para concatenarlo al mensaje
    operacion = operacion.toString();
    
    // muestro el resultado string concatenado al mensaje
    alert("La resta es " + operacion);
}

function multiplicar()
{
    //creo variables 
    var primero;
    var segundo;
    var operacion;
    
    // traigo valores de los números desde el formulario
    primero = document.getElementById("numeroUno").value;
    segundo = document.getElementById("numeroDos").value;
    
    // transformo los números traídos a enteros para poder operar
    primero = parseInt(primero);
    segundo = parseInt(segundo);
    
    //efectúo la operación que me manda el nombre de la función
    operacion = primero * segundo;
    
    // transformo el resultado a string para concatenarlo al mensaje
    operacion = operacion.toString();
    
    // muestro el resultado string concatenado al mensaje
    alert("La multiplicación es " + operacion);
}

function dividir()
{
    //creo variables
    var primero;
    var segundo;
    var operacion;

    // traigo valores de los números desde el formulario
    primero = document.getElementById("numeroUno").value;
    segundo = document.getElementById("numeroDos").value;
    
    // transformo los números traídos a enteros para poder operar
    primero = parseInt(primero);
    segundo = parseInt(segundo);
    
    //efectúo la operación que me manda el nombre de la función
    operacion = primero / segundo;
    
    // transformo el resultado a string para concatenarlo al mensaje
    operacion = operacion.toString();
    
    // muestro el resultado string concatenado al mensaje
    alert("La división es " + operacion);
}

