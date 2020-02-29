
function mostrar()
{
    //ingresos
    var notaIngresada;
    var sexoIngresado;
    var edadIngresada;
    // gestión
    var cantidadAlumnos = 1;
    var acumuladorNotas = 0;
    var promedioNotas = 0;
    var notaMenor = 0;
    var sexoDeNotaMenor;
    var textoSexo;
    var varonesMayoresA18conNotaMayorA6 = 0;
    var edadMenor = 0;
    var sexoDeMenorEdad;

    var huboMujeres = 0;
    var edadPrimerMujerIngresada = 0;
    var notaPrimerMujerIngresada = 0;
    // especiales
    var errores;
    do
    {
        
        do
        {
            errores = 0;
            notaIngresada = prompt("Ingrese una nota para el alumno ( entre 0 y 10 ) " + cantidadAlumnos);
            
            if( notaIngresada == "")
            {
                alert("Necesitamos un valor");
                errores ++;
            }
            else
            {
                if(isNaN(notaIngresada))
                {
                    alert("Ingrese por favor un número ");
                    errores ++;
                }
                else
                {
                    if(notaIngresada < 0 || notaIngresada > 10)
                    {
                        alert("DEbe ser entre 0 y 10 unicamente");
                        errores ++;
                    }

                }
            }
            
        }
        while(errores > 0);
        notaIngresada = parseInt(notaIngresada);

        do
        {
            errores = 0;
            edadIngresada = prompt("Ingrese la edad del alumno");
            if(edadIngresada == "")
            {
                alert("Necesitamos un valor");
                errores++;
            }
            if(isNaN(edadIngresada))
            {
                alert("Tiene que ser numerico");
                errores++;
            }
        }
        while(errores > 0);
        edadIngresada = parseInt(edadIngresada);

        do
        {
            errores = 0;
            sexoIngresado = prompt("Ingrese sexo ( m o F ) del alumno " + cantidadAlumnos);
            sexoIngresado = sexoIngresado.toLowerCase();

            if(!isNaN(sexoIngresado))
            {
                alert("No se permiten numeros");
                errores++;
            }

            if( sexoIngresado != "f" && sexoIngresado != "m")
            {
                alert("Ingrese sólo M o F");
                errores++;
            }
        }
        while(errores > 0);

        // GESTION DE LO PEDIDO
        //-----------------------------------------------------------------------------------------------------------------
        //a) promedio de las noteas totales
        acumuladorNotas += notaIngresada;

        //b) la nota más baja y el sexo de la persona que la tuvo
        if( cantidadAlumnos == 1)
        {
            notaMenor = notaIngresada;
            sexoDeNotaMenor = sexoIngresado;
            
        }
        else
        {
            if(notaIngresada < notaMenor)
            {
                notaMenor = notaIngresada;
                sexoDeNotaMenor = sexoIngresado;
            }
        }


        //d)
        if( edadIngresada > 18)
        {
            if(sexoIngresado == "m")
            {
                if(notaIngresada > 6)
                {
                    varonesMayoresA18conNotaMayorA6++;
                }
            }
        }

        //e) pero figura otra vez como d)

        if( cantidadAlumnos == 1)
        {
            edadMenor = edadIngresada;
            sexoDeMenorEdad = sexoIngresado;
        }
        else
        {
            if(edadMenor > edadIngresada)
            {
                edadMenor = edadIngresada;
                sexoDeMenorEdad = sexoIngresado;
            }
        }

        //d) segundo
        if(sexoIngresado == "f")
        {
            huboMujeres++;
            if(huboMujeres == 1)
            {
                edadPrimerMujerIngresada = edadIngresada;
                notaPrimerMujerIngresada = notaIngresada;
            }
            
        }


        cantidadAlumnos++;

    }
    while(cantidadAlumnos <= 5);
    // a) promedio de notas totales
    if(cantidadAlumnos > 0)
    {
        promedioNotas = acumuladorNotas / cantidadAlumnos;
    }
    
    if( sexoDeNotaMenor == "f")
    {
        textoSexo = "una Mujer";
    }
    else
    {
        textoSexo = "un Varon";
    }
    // SALIDAS
    document.write("el promedio de notas fue " + promedioNotas + "<br>");
    document.write(" la menor nota fue " + notaMenor + " y la obtuvo " + textoSexo + "<br>");
    document.write(" La cantidad de varones cuya edad supera los 18 y su nota el 6, fueron : " + varonesMayoresA18conNotaMayorA6 + "<br>");
    if( sexoDeMenorEdad == "f")
    {
        textoSexo = "una Mujer";
    }
    else
    {
        textoSexo = "un Varon";
    }
    document.write(" el más joven tiene una edad " + edadMenor + " y es " + textoSexo + "<br>");
    if(huboMujeres > 0)
    {
        document.write(" hubieron " + huboMujeres.toString() + " mujeres " + "<br>");
        document.write( " la primera de todas tuvo una nota " + notaPrimerMujerIngresada + " y una edad de " + edadPrimerMujerIngresada + " años" + "<br>");
    }
    else
    {
        document.write("no hubo mujeres");
    }


}
