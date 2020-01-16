/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    // creo variables
    var valorUno;
    var valorDos;
    var valorTres;
    var resultado;
    // tomo el precio
    valorUno = document.getElementById("PrecioUno").value;
    valorDos = document.getElementById("PrecioDos").value;
    valorTres = document.getElementById("PrecioTres").value;

    
    //parseo
    valorUno = parseInt(valorUno);
    valorDos = parseInt(valorDos);
    valorTres = parseInt(valorTres);

    //proceso
    resultado = valorUno + valorDos + valorTres;
    
    //muestro
    alert(resultado);

}
function Promedio () 
{
    // creo variables
    var valorUno;
    var valorDos;
    var valorTres;
    var resultado;
    // tomo el precio
    valorUno = document.getElementById("PrecioUno").value;
    valorDos = document.getElementById("PrecioDos").value;
    valorTres = document.getElementById("PrecioTres").value;

    //parseo
    valorUno = parseInt(valorUno);
    valorDos = parseInt(valorDos);
    valorTres = parseInt(valorTres);

    //proceso
    resultado = (valorUno + valorDos + valorTres) / 3;
    
    //muestro
    alert(resultado);	
}
function PrecioFinal () 
{
	    // creo variables
        var valorUno;
        var valorDos;
        var valorTres;
        var resultado;
        // tomo el precio
        valorUno = document.getElementById("PrecioUno").value;
        valorDos = document.getElementById("PrecioDos").value;
        valorTres = document.getElementById("PrecioTres").value;
    
        //parseo
        valorUno = parseInt(valorUno);
        valorDos = parseInt(valorDos);
        valorTres = parseInt(valorTres);

        //proceso
        resultado = (valorUno + valorDos + valorTres);
        resultado = resultado * 1.21
        
        //muestro
        alert(resultado);
}