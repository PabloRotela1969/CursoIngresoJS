/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color (rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantida de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color
*/
function mostrar()
{
    var err;
    var color;
    var valor = 0;
    //a) La cantida de rojos
    var cantindadRojos = 0;
    //b) La cantidad de rojos con precio mayor a 5000
    var cantidadRojos_precioMayor5000 = 0;
    //c) La cantidad de vehiculos con precio inferior a 5000
    var cantidadInferior5000 = 0;
    //d) El promedio de todos los vehiculos ingresados.
    var cantidadIngresados = 0;
    var acumuladoValor = 0;
    var promedio = 0;
    //e) El mas caro y su color
    var valorMaximo;
    var colorMaximo;

    do
    {
        do
        {
            err = false;
            color = prompt("Ingrese un color");
            if(color == "")
            {
                alert("el dato es requerido");
                err = true;
            }
            else
            {
                if(!isNaN(color))
                {
                    alert("no se esperaba un numero");
                    err = true;
                }

            }
        }while(err);
        color = color.toLowerCase();
        //------------------------color --------------

        do
        {
            err = false;
            valor = prompt("ingrese un valor entre 0 y 10000");
            if(valor == "")
            {
                alert("el dato es requerido");
                err = true;
            }
            else
            {
                if(isNaN(valor))
                {
                    alert("se esperaba un numero");
                    err = true;
                }
                else
                {
                    valor = parseInt(valor);
                    if(valor < 0 || valor > 10000)
                    {
                        alert("Preste atencion al rango esperado");
                        err = true;
                    }
                }
            }
        }while(err);
        //---------------------------valor ingresado---------------
        //a) La cantida de rojos
        if(color == "rojo")
        {
            cantindadRojos++;
        }
        //b) La cantidad de rojos con precio mayor a 5000
        if(valor > 5000)
        {
            if(color == "rojo")
            {
                cantidadRojos_precioMayor5000 ++;
            }
        }

        //c) La cantidad de vehiculos con precio inferior a 5000
        if(valor < 5000)
        {
            cantidadInferior5000++;
        }

        //d) El promedio de todos los vehiculos ingresados.
        cantidadIngresados++;
        acumuladoValor += valor;

        //e) El mas caro y su color
        if(cantidadIngresados == 1)
        {
            valorMaximo = valor;
            colorMaximo = color;
        }
        else
        {
            if(valor > valorMaximo)
            {
                valorMaximo = valor;
                colorMaximo = color;
            }
        }

    }
    while(confirm("Desea seguir ingresando ?"));
    //a) La cantida de rojos
    document.write(" la cantidad de rojos fue de " + cantindadRojos + "<br>");
    //b) La cantidad de rojos con precio mayor a 5000
    document.write(" la cantidad de rojos con precio mayor a 5000" + cantidadRojos_precioMayor5000 + "<br>");
    //c) La cantidad de vehiculos con precio inferior a 5000
    document.write(" cantidad de vehiculos de precio inferior a 5000 " + cantidadInferior5000 + "<br>");
    //d) El promedio de todos los vehiculos ingresados.
    if(cantidadIngresados > 0)
    {
        promedio = acumuladoValor / cantidadIngresados;
        document.write(" promedio de todos los valores ingresados " + promedio + "<br>");    
    }
    //e) El mas caro y su color

    document.write(" el mas caro fue de " + valorMaximo + " y su color " + colorMaximo + "<br>");

}
