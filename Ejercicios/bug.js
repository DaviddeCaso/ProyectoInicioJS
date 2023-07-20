// Añado el código del cliente con errores.
debugger
// const calcularPromedio = (numeros) => {
//   let sumaTotal = 0;
//   for (let i = 0; i <= numeros.length; i++) {
//   sumaTotal += numeros[i];
//   }
//   const promedio = sumaTotal / numeros.length;
//   return promedio;
//   };
//   const listaNumeros = [1, 2, 3, 4, 5];
//   const promedioNumeros = calcularPromedio(listaNumeros);

// Esta sería la solución

  const calcularPromedio = (numeros) => {
    let sumaTotal = 0;
    for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
    }
    const promedio = sumaTotal / numeros.length;
    return promedio;
    };
    const listaNumeros = [1, 2, 3, 4, 5];
    const promedioNumeros = calcularPromedio(listaNumeros);


// El problema se encuentra en el bucle for, ya que al añadir ese "<=" como forma de finalizar la condicion, hace que el bucle de una vuelta más acaba dando error NaN.
//Quitando ese "=" se soluciona el problema.
  