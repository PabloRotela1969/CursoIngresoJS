function mostrar()
{
    var numeroIngresado;
    var letraIngresada;
    var cantidadNumerosPares = 0;
    var cantidadNumerosIMpares = 0;
    var cantidadCeros = 0;
    var cantidadPositivos = 0;
    var cantidadNegativos = 0;
    var acumuladoPositivosIngresados = 0;
    var cantidadPositivosIngresados = 0;
    var promedioPositivosIngreados = 0;
    var AcumuladoNegativosIngresados = 0;
    var paridad = 0;

    var maximo = 0;
    var numeroDelMaximo = 0;
    var letraDelMaximo;

    var minimo = 0;
    var numeroDelMinimo = 0;
    var letraDelMinimo;

    var cantidad = 0;
    var valido;
    do
    {

        //ingreso una o unas letras
        do
        {   
            letraIngresada = prompt(" Ingrese una letra ");
            if(!isNaN(letraIngresada))
            {
                alert("no se permiten números");
            }
        }
        while(!isNaN(letraIngresada));





        // ingreso un numero entre -100 y 100
        do
        {
            valido = true;
            numeroIngresado = prompt("Ingrese un número entre -100 y 100");
            if(isNaN(numeroIngresado))
            {
                alert("Por favor ingrese un número");
                valido = false;
            }

            numeroIngresado = parseInt(numeroIngresado);
            if ( numeroIngresado < -100 || numeroIngresado > 100)
            {
                alert("Considere ingresar entre -100 y 100 por favor");
                valido = false;
            }

        }while(!valido);



        // cantidad de números pares a  e impares b
        if(numeroIngresado == 0)
        {
            cantidadCeros++;
        }
        else
        {  
            paridad = numeroIngresado % 2;  
            
            if( paridad == 0 )
            {
                cantidadNumerosPares++;
            }
            else
            {
                cantidadNumerosIMpares++;
            }
        }

        if (numeroIngresado > 0)
        {
            acumuladoPositivosIngresados += numeroIngresado;
            cantidadPositivosIngresados ++;
        }

        if ( numeroIngresado < 0)
        {
            AcumuladoNegativosIngresados += numeroIngresado;
        }
        
        
        if ( cantidad == 0)
        {
            maximo = numeroIngresado;
            letraDelMaximo = letraIngresada;

            minimo = numeroIngresado;
            letraDelMinimo = letraIngresada;

        }
        else
        {
            if ( numeroIngresado > maximo)
            {
                maximo = numeroIngresado;
                numeroDelMaximo = numeroIngresado;
                letraDelMaximo = letraIngresada;
            }

            if ( numeroIngresado < minimo )
            {
                minimo = numeroIngresado;
                numeroDelMinimo = numeroIngresado;
                letraDelMinimo = letraIngresada;
            }
        }

        cantidad ++;

        

    }
    while(confirm("Desea seguir ingresando?"));

    document.write(" Cantidad de ceros " + cantidadCeros + "<br>");
    document.write(" cantidad de pares " + cantidadNumerosPares + "<br>");
    document.write(" cantidad de impares " + cantidadNumerosIMpares + "<br>");
    promedioPositivosIngreados = acumuladoPositivosIngresados / cantidadPositivosIngresados;
    document.write(" Promedio de numeros ingresados " + promedioPositivosIngreados + "<br>");
    document.write( "Suma de todos los negativos ingresados " + AcumuladoNegativosIngresados + "<br>");
    document.write( " Numero maximo " + numeroDelMaximo + "<br>");
    document.write( " letra del maximo " + letraDelMaximo + "<br>");

    document.write( "Numero minimo " + numeroDelMinimo + "<br>");
    document.write( "letra del minimo " + letraDelMinimo + "<br>");


}
