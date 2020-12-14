// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(var i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var cadena = "";
  for(var x = 0; x < palabras.length; x++) {
    if(x === palabras.length - 1) {
      cadena = cadena + palabras[x];
    } else {
    cadena = cadena + palabras[x] + " ";
    } 

  }
  return cadena;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if(array.length === 0) {
    return false;
  } else {
    for (var j = 0; j < array.length; j++) {
      if(elemento === array[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (var b = 0; b < numeros.length; b++) {
    suma = suma + numeros[b];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  var promedio = 0;
  for (var c = 0; c < resultadosTest.length; c++) {
    suma = suma + resultadosTest[c]; 
  }
  promedio = suma / resultadosTest.length;
  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = numeros[0];
  for (var j = 0; j < numeros.length - 1; j++) {
    if(mayor > numeros[j + 1]) {
      mayor = mayor;
    } else {
      mayor = numeros[j+1];
    }
  }
  return mayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  var multiplicar = 1;
  
  if(arguments.length === 0 ) {
    multiplicar = 0;
  } else if(arguments.length === 1) {
    multiplicar = arguments[0];
  } else {  

    for (var y = 0; y < arguments.length; y++) {
      
      
        multiplicar *= arguments[y];
      
    }
  }

  return multiplicar;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
