// 2. Escriba un programa que solicite al usuario ingresar un número entero del 1 al
// 12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es
// marzo, etc. Deberá guardar esta información en alguna de las estructuras ya
// vistas, es decir, 1 = enero, 2 = febrero, 3 = marzo, etc para luego ser utilizada en
// el texto a imprimir. Su programa deberá ser guardado en un archivo meses.js y
// consistirá de imprimir por consola la cantidad de días que tiene el mes
// ingresado bajo el siguiente formato:
// "La cantidad de dias del mes de [mes] es [cantidadDeDias]"
// Por ejemplo: si el número ingresado es 1, su programa imprimirá “La cantidad
// de dias del mes de enero es 31”.
// NOTAS:
// ● Nota que el valor de [mes] no es el numero ingresado si no su
// correspondiente almacenado en la estructura de datos elegida.
// ● Para el alcance de este ejercicio, podemos pensar que febrero siempre
// tiene 28 días.

const readlineSync = require('readline-sync');
const mes = readlineSync.question("ingresa el numero del mes por el que deseas consultar \n");


switch (mes) {
    case "1":
        console.log("La cantidad de dias del mes de enero es 31");
        break;
    case "2":
        console.log("La cantidad de dias del mes de febrero es 28");
        break;
    case "3":
        console.log("La cantidad de dias del mes de marzo es 31");
        break;
    case "4":
        console.log("La cantidad de dias del mes de abril es 30");
        break;
    case "5":
        console.log("La cantidad de dias del mes de mayo es 31");
        break;
    case "6":
        console.log("La cantidad de dias del mes de junio es 30");
        break;
    case "7":
        console.log("La cantidad de dias del mes de julio es 31");
        break;
    case "8":
        console.log("La cantidad de dias del mes de agosto es 31");
        break;
    case "9":
        console.log("La cantidad de dias del mes de septiembre es 30");
        break;
    case "10":
        console.log("La cantidad de dias del mes de octubre es 31");
        break;
    case "11":
        console.log("La cantidad de dias del mes de noviembre es 30");
        break;
    case "12":
        console.log("La cantidad de dias del mes de diciembre es 31");
        break;
    default:
        console.log("el valor ingresado no corresponde a un mes");
        break;
}