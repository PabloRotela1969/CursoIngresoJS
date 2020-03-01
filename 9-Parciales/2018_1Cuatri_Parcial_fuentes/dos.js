function mostrar()
{
      // hago el del a/CursoIngresoJS/9-Parciales/2018_1Cuatri_Recu_Enunciado.pdf , ejercicio 8 acá para poder probarlo
    /*
    8-(2pts.) Realizar el algoritmo que permita iterar el ingreso de varios libros con cuatro datos por cada libro, nombre, cantidad de páginas, cantidad de ventas (0 o más)
     y tema (posibles temas: “robótica", "programación", "patrones", "base de datos”)
      validar e ingresar datos hasta que el usuario quiera e informar al terminar el ingreso por document.write:
        a) La cantidad de libros con páginas pares. 
        b) La cantidad de libros con páginas impares. 
        c) La cantidad de ceros ventas. 
        d) El promedio de todas las ventas ingresadas. 
        e) La suma de todas las páginas de los de "programación". 
    */

   var errores;
   var nombreLibro;
   var cantidadPaginas;
   var cantidadVentas = 0;
   var temas;
   var cantidadIngresados = 0;
   var cantidadLibrosPaginasPares = 0;
   var cantidadLibrosPaginasIMpares = 0;
   var paridadPaginas = 0;
   var cantidad0ventas = 0;
   var promedioVentas = 0;
   var cantidadPaginasLibrosProgramacion = 0;
   var acumuladoVentas =0;

   do
   {
       
       do
       {
           errores = 0;
           nombreLibro = prompt(" IUngrese el nombre del libro ");
           if( nombreLibro == "")
           {
               alert("el dato es requerido");
               errores++;
           }
       }
       while(errores > 0);
//-----------------------------------------------------------cantidad de paginas ------------------------
       do
       {
           errores = 0;
           cantidadPaginas = prompt(" Ingrese la cantidad de páginas del libro " + nombreLibro);
           if(cantidadPaginas == "")
           {
               alert("El dato es requerido");
               errores ++;
           }
           else
           {
               if( isNaN(cantidadPaginas))
               {
                   alert("Recuerde que debe ser numérico el dato");
                   errores ++;
               }
               else
               {
                   cantidadPaginas = parseInt(cantidadPaginas);
                   if( cantidadPaginas < 0)
                   {
                       alert("cifras positivas por favor");
                       errores ++;
                   }
               }
           }
       }
       while(errores > 0);
//------------------------------------------------------------cantidad de ventas -------------------------
       do
       {
           errores = 0;
           cantidadVentas = prompt("Ingrese cantidad de ventas ( desde 0 o más )");

               if(isNaN(cantidadVentas))
               {
                   alert("Se esperaba un número");
                   errores ++;
               }
               else
               {
                   cantidadVentas = parseInt(cantidadVentas);
                   if(cantidadVentas < 0)
                   {
                       alert("Introduzca valores positivos");
                       errores++;
                   }
               }
       
       }
       while(errores > 0);

//------------------------------------------------------------temas --------------------------------------

       do
       {
           errores = 0;
           temas = prompt("ingrese tema como :  1 = robótica, 2 = programación, 3 = patrones, 4 = base de datos");
           if(temas == "")
           {
               alert("el dato es requerido");
               errores++;
           }
           else
           {
               if(isNaN(temas))
               {
                   alert("Sirvase elegir el tema por su número");
                   errores ++;
               }
               else
               {
                   temas = parseInt(temas);
                   switch(temas)
                   {
                       case 1:
                           temas = "robótica";
                           break;
                       case 2:
                           temas = "programación";
                           break;
                       case 3:
                           temas = "patrones";
                           break;
                       case 4:
                           temas = "base de datos";
                           break;
                       default:
                           alert("Tenga en cuenta las opciones disponibles");
                           errores ++;
                           break;
                   }
               }
           }

       }
       while(errores > 0);

// ------------------------------------------- FIN DE INGRESOS -------------------------------------------------

       cantidadIngresados ++;
//--------------------------------------------puntos a y b -----------------------------
       paridadPaginas = cantidadPaginas % 2;

       if( paridadPaginas == 0)
       {
           cantidadLibrosPaginasPares++;
       }
       else
       {
           cantidadLibrosPaginasPares++;
       }
//-------------------------------------------punto c -----------------------------------
       if(cantidadVentas == 0)
       {
           cantidad0ventas++;
       }
//------------------------------------------ punto e ( el d está debajo del while ) ----
       if( temas == "programación")
       {
           cantidadPaginasLibrosProgramacion += cantidadPaginas;
       }

       acumuladoVentas += cantidadVentas;
   }
   while(confirm("Desea segui ingresando?"));

//--------------------------------------------- ARMO LAS SALIDAS -------------------------------------------------
   document.write("Cantidad de libros con páginas pares " + cantidadLibrosPaginasPares + "<br>");
   document.write("Cantidad de libros con páginas IMPARES " + cantidadLibrosPaginasIMpares + "<br>");
   document.write("cantidad de libros con cero ventas " + cantidad0ventas + "<br>");
   if( cantidadIngresados > 0)
   {
       promedioVentas = ( acumuladoVentas ) / cantidadIngresados;
   }
   document.write("El promedio de ventas fue " + promedioVentas + "<br>");
   document.write("Cantidad de páginas de todos los libros de programación ingresados " + cantidadPaginasLibrosProgramacion + "<br>");
}
