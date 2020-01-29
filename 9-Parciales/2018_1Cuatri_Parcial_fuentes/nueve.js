function mostrar()
{
    var marcaProducto;
    var pesoProducto = 0;
    var temperatura = 0;

    var paridad = 0;
    var cantidadTemperaturasPares = 0;

    var maximo;
    var marcaMasPesado;
    var pesoMaximo = 0;

    var minimo;
    var pesoMinimo = 0;

    var cantidadProductosAmenosDe0grados = 0;
    var acumuladoPesosTodosProductos = 0;
    var promedioPesosTodosProductos = 0;
    var cantidadDatos = 0;
    var cantidadErrores;
    do
    {
        do
        {
            cantidadErrores = 0;
            marcaProducto = prompt("Ingrese la marca del producto ");
            if(marcaProducto == "")
            {
                alert(" Ingrese alguna marca por favor");
                cantidadErrores++;
            }
        }
        while(cantidadErrores > 0);

    
        do
        {
            cantidadErrores = 0;
            pesoProducto = prompt(" Ingrese el Peso del producto (entre 1 y 100)");
            if(isNaN(pesoProducto))
            {
                alert("Tenga en cuenta que debe ser un número");
                cantidadErrores++;
            }

            if(pesoProducto < 1 || pesoProducto > 100)
            {
                alert(" Entre 1 y 100 por favor");
                cantidadErrores++;
            }
        }
        while(cantidadErrores > 0);
        pesoProducto = parseInt(pesoProducto);
            
        do
        {
            cantidadErrores = 0;
            temperatura = prompt(" Ingrese la temperartura (-30 y 30)");
            if(isNaN(temperatura))
            {
                alert("Tenga en cuenta que debe ser un número");
                cantidadErrores++;
            }

            if(temperatura < -30 || temperatura > 30)
            {
                alert(" Entre -30 y 30 por favor");
                cantidadErrores++;
            }
        }
        while(cantidadErrores > 0);
        temperatura = parseInt(temperatura);
       
        paridad = temperatura % 2
        if(paridad == 0)
        {
            cantidadTemperaturasPares++;
        }

        
        if(cantidadDatos == 0)
        {
            maximo = pesoProducto;
            marcaMasPesado = marcaProducto;
            minimo = pesoProducto;
        }
        else
        {
            if( maximo < pesoProducto)
            {
                maximo = pesoProducto;
                marcaMasPesado = marcaProducto;
            }
            if( minimo > pesoProducto)
            {
                minimo = pesoProducto;
            }
        }


        if( temperatura < 0)
        {
            cantidadProductosAmenosDe0grados++;
        }

        acumuladoPesosTodosProductos += pesoProducto;

        cantidadDatos++;
    }
    while(confirm("Quiere seguir ingresando?"));

    document.write("Cantidad de temperaturas pares "+ cantidadTemperaturasPares + "<br>" );
    document.write(" Marca del producto mas pesado " + marcaMasPesado + "<br>");
    document.write("Cantidad de productos que se mantienen a menos de 0 grados "+ cantidadProductosAmenosDe0grados  + "<br>");
    if ( cantidadDatos > 0)
    {
        promedioPesosTodosProductos = acumuladoPesosTodosProductos / cantidadDatos;
    }
    
    document.write(" Promedio de pesos de todos los productos " + promedioPesosTodosProductos + "<br>");
    document.write(" Peso maximo " + maximo + " minimo " + minimo + "<br>");

}
