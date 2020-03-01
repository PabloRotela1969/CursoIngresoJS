/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var errores;
    var edad;
    var sexo;
    var EstadoCivil;
    var textoEstadoCivil;
    var sueldoBruto;
    var legajo;
    var nacionalidad;

    do
    {
        errores = 0;
        edad = prompt("Ingrese la edad entre 18 y 90 años");
        if(edad == "")
        {
            alert("El dato es requerido");
            errores ++;
        }
        if(isNaN(edad))
        {
            alert("Por favor ingrese un numero");
            errores ++;
        }
        else
        {
            edad = parseInt(edad);
            if( edad < 18 || edad >= 90)
            {
                alert("Por favor atengase al rango de edad");
                errores ++;
            }
        }

    }
    while(errores > 0);
    document.getElementById("Edad").value = edad;

    do
    {
        errores = 0;
        sexo = prompt("Favor de ingresar el sexo M masculino y F femenino");
        sexo = sexo.toLowerCase();
        if(sexo == "")
        {
            alert("El dato es requerido");
            errores++;
        }
        if(!isNaN(sexo))
        {
            alert("No se permiten numeros");
            errores++;
        }
        else
        {
           switch(sexo)
           {
                case "f":
                   sexo = "Femenino";
                   break;
                case "m":
                    sexo = "Masculino";
                    break;
                default:
                    alert("Tenga en cuenta las letras permitidas");
                    errores++;
                    break;
           }
        }

    }
    while(errores > 0);
    document.getElementById("Sexo").value = sexo;

    do
    {
        errores = 0;
        EstadoCivil = prompt("Ingrese 1 - soltero, 2 - casado, 3 - divorciados, 4 - viudos ");
        if(EstadoCivil == "")
        {
            alert("el dato es requerido");
            errores++;
        }
        else
        {
            if(isNaN(EstadoCivil))
            {
                alert("Se precisan numeros ");
                errores++;
            }
            else
            {
                EstadoCivil = parseInt(EstadoCivil);
                switch(EstadoCivil)
                {
                    case 1:
                        textoEstadoCivil = "soltero";
                        break;
                    case 2:
                        textoEstadoCivil = "casado";
                        break;
                    case 3:
                        textoEstadoCivil = "divorciado";
                        break;
                    case 4:
                        textoEstadoCivil = "viudo";
                        break;
                    default:
                        alert( "Favor de ingresar un numero entre 1 y 4");
                        errores ++;
                        break;
                }
            }
        }
    }
    while(errores > 0);
    document.getElementById("EstadoCivil").value = textoEstadoCivil;

    do
    {
        errores = 0;
        sueldoBruto = prompt(" Ingrese sueldo no menor a 8000");
        if(sueldoBruto == "")
        {
            alert("el dato es requerido");
            errores++;
        }
        if(isNaN( sueldoBruto))
        {
            alert("Por favor que sea un numero");
            errores++;
            
        }
        else
        {
            sueldoBruto = parseInt(sueldoBruto);
            if(sueldoBruto <= 8000)
            {
                alert(" Debe ser mayor a 8000");
                errores++;
            }
        }
        
    }
    while(errores > 0);
    document.getElementById("Sueldo").value = sueldoBruto;

    do
    {
        errores = 0;
        legajo = prompt(" Numero de legajo 4 cifras sin 0 a izquierda");
        if(legajo =="")
        {
            alert("El dato es requerido");
            errores++;
        }
        
        if(isNaN(legajo))
        {
            alert("Debe ser numerico");
            errores++;
        }
        else
        {
            legajo = parseInt(legajo);
            if( legajo < 1000 || legajo >= 9999)
            {
                alert("de 4 cifras sin 0 a la izquierda");
                errores++;
            }
        }

    }
    while(errores > 0);
    document.getElementById("Legajo").value = legajo;

    do
    {
        errores = 0;
        nacionalidad = prompt("Ingrese A = argentino, E = extrangeros, N = nacionalizados");
        if(nacionalidad == "")
        {
            alert("el dato es requerido")
            errores ++;
        }
        if(!isNaN(nacionalidad))
        {
            alert("no se esperan numeros");
            errores++;
        }
        else
        {
            nacionalidad = nacionalidad.toLowerCase();
            switch(nacionalidad)
            {
                case "a":
                    nacionalidad = "argentino";
                    break;
                case "e":
                    nacionalidad = "extrangeros";
                    break;
                case "n":
                    nacionalidad = "nacionalizados";
                    break;
                default:
                    alert("Atengase a las letras requeridas");
                    errores ++;
                    break;
                    
            }
        }
    }
    while(errores > 0);
    document.getElementById("Nacionalidad").value = nacionalidad;








}
