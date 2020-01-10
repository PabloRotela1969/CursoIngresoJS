/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    //creo variables	
    var primero;
    var segundo;
    var suma;
    var primerParseado;
    var segundoParseado;

    // traigo valores de los números desde el formulario
    primero = document.getElementById("numeroUno").value;
    segundo = document.getElementById("numeroDos").value;

    // transformo los números traídos a enteros para poder operar
    primerParseado = parseInt(primero);
    segundoParseado = parseInt(segundo);

    //efectúo la operación que me manda el nombre de la función
    suma = primerParseado + segundoParseado;

    // muestro el resultado string concatenado al mensaje
    alert(suma);
}

