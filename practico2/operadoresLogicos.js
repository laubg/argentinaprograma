// 3. Escribe un programa que solicite al usuario ingresar un número entero. Guardar
// el programa en un archivo operadoresLogicos.js. A continuación, evalúa las
// siguientes condiciones:
// - Si el número es positivo y par, muestra por consola el mensaje: "El
// numero es positivo y par".
// - Si el número es positivo e impar, muestra por consola el mensaje: "El
// numero es positivo e impar".
// - Si el número es negativo, muestra por consola el mensaje: "El numero es
// negativo".
// - Si el número es cero, muestra por consola el mensaje: "El numero es
// cero".
// NOTA: utilizar los operadores lógicos.

const readlineSync = require('readline-sync');
const numero = readlineSync.question("ingresa un numero entero \n");

if (numero>0 && numero%2===0) {
    console.log("El numero es positivo y par");
} else if(numero>0 && numero%2!==0){
    console.log("El numero es positivo e impar");
} else if(numero==0){
    console.log("El numero es cero");   
}else{
    console.log("El numero es negativo");
}