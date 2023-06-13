// 3. Operadores aritméticos:
//  a. Crea cuatro variables que contengan valores numéricos.
//  b. Suma las dos primeras variables y guarda el resultado en otra variable.
//  c. Resta la cuarta variable de la tercera y almacena el resultado en otra
// variable.
//  d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el
// resultado en una variable llamada resultadoFinal. El producto debe ser
// 44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.
//  e. Escribe un cálculo que verifique si resultadoFinal es un número par.
// Almacene el resultado en una variable llamada esPar.
//  f. Imprima por consola un mensaje con el siguiente formato:
// “Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. La
// respuesta a verificar si el resultado final es par es: [esPar]”
//  g. Deberá guardar este programa en un archivo llamado
// operacionesAritmeticas.js

let n1= 3;
let n2= 1;
let n3= 41;
let n4= 52;

let sumaN1n2= n1+ n2;
let restaN4n3= n4-n3;
let resultadoFinal= sumaN1n2*restaN4n3;

// console.log(resultadoFinal);

let esPar= resultadoFinal%2===0 ;

// console.log(esPar);
console.log("Mis variables iniciales fueron: "+n1+", "+ n2+", "+ n3+" y "+ n4+". La respuesta a verificar si el resultado final es par es: "+esPar);