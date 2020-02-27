function mostrar()
{
    var CantidadAlumnos = 1;
    var nota = 0;
    var sexo;
    var valido;
    var sumaNotas = 0;
    var notaMinima = 0;
    var sexoNotaMinima;
    var promedioNotas = 0;
    var varonesNotaMayor6 = 0;
    do
    {
        do
        {
            valido = true;
            nota = prompt("Ingrese la nota del alumno " + CantidadAlumnos.toString());
            if(isNaN(nota))
            {
                alert("Favor de ingresar numeros");
                valido = false;
            }
            nota = parseInt(nota);
            if(nota <0 || nota > 10)
            {
                alert("Entre 0 y 10 por favor");
                valido = false;
            }
        }
        while(!valido);


        do
        {
            valido = true;
            sexo = prompt("Ingrese el sexo ( F o M ) del alumno" + CantidadAlumnos.toString());
            sexo = sexo.toUpperCase();
            if(sexo != "F" && sexo != "M")
            {
                alert("Favor ingrese F o M ");
                valido = false;
            }
           
           
        }
        while(!valido);

        sumaNotas += nota;

        if(CantidadAlumnos == 1)
        {
            notaMinima = nota;
            sexoNotaMinima = sexo;
        }
        else
        {
            if( notaMinima > nota)
            {
                notaMinima = nota;
                sexoNotaMinima = sexo;
            }
        }

        if(sexo == "M")
        {
            if(nota >= 6)
            {
                varonesNotaMayor6++;
            }
        }

        CantidadAlumnos ++;
    }
    while(CantidadAlumnos <= 5);
    
    promedioNotas = sumaNotas / 5;
    alert(" Promedio de notas totales " + promedioNotas);
    alert(" Nota mas baja " + notaMinima.toString() + " y el sexo fue " + sexoNotaMinima.toString());
    alert(" Varones cuya nota es mayor o igual a 6 " + varonesNotaMayor6);


}
