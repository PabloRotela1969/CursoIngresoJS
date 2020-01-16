/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //variables
    var fahr;
    var cent;
    
    //cargo
    fahr = document.getElementById("Temperatura").value;

    //parseo
    fahr = parseInt(fahr);

    //paso a centigrados
    cent = fahr - 32;
    cent = cent.toString() + " centigrados";
    alert(cent);

}

function CentigradosFahrenheit () 
{
    //variables
    var fahr;
    var cent;
    
    //cargo
    cent = document.getElementById("Temperatura").value;

    // parseo
    cent = parseInt(cent);
    
    //paso a centigrados
    fahr = cent + 32;
    fahr = fahr.toString() + " fahrenheit";
    alert(fahr);
}
