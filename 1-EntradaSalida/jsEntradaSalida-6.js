/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var primero;
    var segundo;
    var suma;
    primero = document.getElementById("numeroUno").value;
    segundo = document.getElementById("numeroDos").value;
    suma = parseInt(primero) + parseInt(segundo);

    alert(suma);
}

