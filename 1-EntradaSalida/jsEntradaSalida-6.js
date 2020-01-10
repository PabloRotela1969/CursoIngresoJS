/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var primero;
    var segundo;
    var suma;
    var primerParseado;
    var segundoParseado;
    primero = document.getElementById("numeroUno").value;
    segundo = document.getElementById("numeroDos").value;
    primerParseado = parseInt(primero);
    segundoParseado = parseInt(segundo);
    
    suma = primerParseado + segundoParseado;

    alert(suma);
}

