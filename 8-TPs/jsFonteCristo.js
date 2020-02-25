/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
//function ComenzarIngreso()
function NumerosPares() 
{
     var numero = document.getElementById("numero").value;
     if( numero != "" && !isNaN(numero))
     {
        numero = parseInt(numero);
        if(numero < 0)
        {
            alert("Por favor, ingrese un número positivo");
            document.getElementById("numero").value = "";
        }
        else
        {
            do
            {
                if((numero % 2) == 0)
                {
                    alert(numero);
                }
                numero --;
            }
            while(numero > 0);
        }
     }
}

function NumerosImpares() 
{
     var numero = document.getElementById("numero").value;
     if( numero != "" && !isNaN(numero))
     {
        numero = parseInt(numero);
        if(numero < 0)
        {
            alert("Por favor, ingrese un número positivo");
            document.getElementById("numero").value = "";
        }
        else
        {
            do
            {
                if((numero % 2) != 0)
                {
                    alert(numero);
                }
                numero --;
            }
            while(numero > 0);
        }
     }
}

function NumerosDivisibles() 
{
     var numero = document.getElementById("numero").value;
     var numerosParaProbarDivisibilidad = 1;
     if( numero != "" && !isNaN(numero))
     {
        numero = parseInt(numero);
        if(numero < 0)
        {
            alert("Por favor, ingrese un número positivo");
            document.getElementById("numero").value = "";
        }
        else
        {
            do
            {
                if((numero % numerosParaProbarDivisibilidad) == 0)
                {
                    alert(numerosParaProbarDivisibilidad);
                }
                numerosParaProbarDivisibilidad ++;
            }
            while(numerosParaProbarDivisibilidad <= 100);
        }
     }
}

function VerificarPrimo() 
{
     var numero = document.getElementById("numero").value;
     var numerosParaProbarDivisibilidad;
     var primo = true;
     if( numero != "" && !isNaN(numero))
     {
        numero = parseInt(numero);
        if(numero < 0)
        {
            alert("Por favor, ingrese un número positivo");
            document.getElementById("numero").value = "";
        }
        else
        {
            numerosParaProbarDivisibilidad = numero - 1;
            
            do
            {
                
            
                if((numero % numerosParaProbarDivisibilidad) == 0)
                {
                    primo = false;
                }
                numerosParaProbarDivisibilidad --;
            }
            while(numerosParaProbarDivisibilidad > 1);
            if ( primo )
            {
                alert("Es Primo");
            }
            else
            {
                alert("NO ES primo");
            }
        }
     }
}

function NumerosPrimos() 
{
     var numero = document.getElementById("numero").value;
     var numerosParaProbarDivisibilidad;
     var primo;
     if( numero != "" && !isNaN(numero))
     {
        numero = parseInt(numero);
        if(numero < 0)
        {
            alert("Por favor, ingrese un número positivo");
            document.getElementById("numero").value = "";
        }
        else
        {
            do
            {
                //a mi numero para probar le resto uno para no probar por sí mismo
                numerosParaProbarDivisibilidad = numero - 1;
                //alert("numero " + numero.toString());
                // supongo primo
                primo = true;
                do
                {
                    // si el numero ingresado es divisible del numero para probar, no es primo
                    if((numero % numerosParaProbarDivisibilidad) == 0)
                    {
                        primo = false;
                    }
                    // pruebo por uno menor
                    numerosParaProbarDivisibilidad --;
                }
                // repito hasta llegar a 2, porque todos son divisibles por 1
                while(numerosParaProbarDivisibilidad > 1);
                if ( primo )
                {
                    alert("Primo " + numero.toString());
                }
                // reduzco el numero ingresado en 1
                numero --;
            }
            while ( numero > 1)
        }
     }
}