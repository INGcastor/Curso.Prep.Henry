// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0];
}
devolverPrimerElemento([0,1,2,3]);



function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}
devolverUltimoElemento([0,1,2,3]);



function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length; 
}
obtenerLargoDelArray([0,1,2,3]);


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = [];
  for(var i = 0; i < array.length; i++) {
    nuevoArray[i] = array[i] + 1;}

    return nuevoArray;

}
incrementarPorUno([0,1,2,3]);




function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array[array.length] = elemento;
  return array;
}
agregarItemAlFinalDelArray([1,2,3,4,5],[6]);





function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift (elemento);
  return array;
}
agregarItemAlComienzoDelArray([1,2,3,4], [0]);




function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  
  return palabras.join(" ");
}
dePalabrasAFrase(['hola', 'jorge']);



function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i = 0; i < array.length; i++) {
    if(array[i] === elemento) {
      return true;
    }
  }
  return false;
}
arrayContiene([1,2,3,5],[5]);




  function agregarNumeros(numeros) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    let suma = 0;
    for(let i = 0; i < numeros.length; i++) {
      suma = suma + numeros[i];
    }
    return suma;
  
  }

agregarNumeros([1,2,3]);



//function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  //let promedio = 0;
  //for( let i = 0; i < resultadosTest.length;i++) {
   
    //promedio = promedio + resultadosTest[i] / resultadosTest.length ;

  //}

  //return promedio;
//}
//promedioResultadosTest([4,4,4]);
// ESTA ES OTRA FORMA DE RESOLVERLO MEDIANTE UN FOR.


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}

promedioResultadosTest([5,4,4]);
console.log(promedioResultadosTest([5,4,4]));

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let masGrande = numeros[0];
  for(let i = 1; i < numeros.length; i++) {
    if(numeros[i] > masGrande) { 
      masGrande = numeros[i];
    }
  }
  return masGrande;
}
numeroMasGrande([5,2]);


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length < 1) {
    return 0;
  }
  let producto = 1;
  for (let i = 0; i < arguments.length; i++) {
    producto = producto * arguments[i];
  }
  return producto;
}
multiplicarArgumentos([2,3,8]);




function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  let contador = 0;
  for (let i = 0; i < arreglo.length ; i++) {
    if(arreglo[i] > 19){
      contador++
    }
  }
  return contador
}
cuentoElementos([1,2,20,21]);


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
 
  if(numeroDeDia === 1 || numeroDeDia === 7 ){
    return "Es fin de semana"
  }
 else {
  return "Es dia Laboral"
 }
  
} 
diaDeLaSemana(2);



function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  let num = n.toString() // Metodo toString convierte una array en una cadena de texto.
  if(num.charAt(0) === "9"){ 
    return true;
  }
  return false;
}
empiezaConNueve(9);

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (let i =0 ; i < arreglo.length - 1; i++) {
    if(arreglo[i] !== arreglo[i+1]){
      return false
    }
  }
  return true
} 
  todosIguales([1,1,1]);
    

  function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    let nuevoArray = [];
    for(let i= 0; i<array.length; i++) {
      if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
        nuevoArray.push(array[i]);
      }
    }
    if(nuevoArray.length < 3) {
      return "No se encontraron los meses pedidos";
    }
    else {
        return nuevoArray;
    }
  }
  mesesDelAño(["agosto"]);



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoA = [];
  for(let i= 0; i < array.length; i++) {
    if(array[i] > 100) {
      nuevoA.push(array[i]);
    }
  }
  return nuevoA;
}
mayorACien([101,102,103]);





function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    suma = suma + 2;
    if(suma === i) break;
    else {
      array.push(suma);
    }
  }
  if(i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return array;
  }
}
breakStatement(5);


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
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
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
