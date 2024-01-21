/*
Crea un programa que al ingresar un número diga si es positivo o negativo
*/

// let numero = prompt("Ingresa un numero ");

// if (numero > 0) {
//   console.log(`El numero ${numero} es positivo`);
// } else {
//   console.log(`El numero ${numero} es negativo`);
// }

/* 
Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.
No considerar el caso en que ambos números son iguales. 
*/

// let numero1 = prompt("Ingresa el primer numero :");
// let numero2 = prompt("Ingresa el segundo numero :");

// if (numero1 < numero2) {
//   console.log(numero1);
// } else {
//   console.log(numero2);
// }

/*
Solicitar al usuario un número, y determinar si es divisible entre dos o no.
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x número
no es divisible entre 2”. (un número es divisible entre otro número si su división sea
exacta, es decir, el resto es igual a cero)

*/
// let numero = prompt("Ingrese un numero : ");

// if (numero % 2 == 0) {
//   console.log(`El numero ${numero} es divisible entre 2`);
// } else {
//   console.log(`El numero ${numero} no es divisible entre 2`);
// }

/* 
Calcular la factorial de un número:
*/
// let numero = prompt("Ingresa un numero : ");
// let resultado = 1;
// for (let i = 1; i <= numero; i++) {
//   resultado *= i;
// }
// console.log(resultado);

/*
Escriba un programa en JavaScript de un bucle que itere del 1 al 15. Para cada
iteración, verifica si el número actual es impar o par, y muestra un mensaje en la
pantalla. 
*/
// for (let i = 1; i <= 15; i++) {
//   if (i % 2 == 0) {
//     console.log(`El numero ${i} es par`);
//   } else {
//     console.log(`El numero ${i} es impar`);
//   }
// }

/* 
Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente
mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!”
solo al mostrar los números indicados por el usuario. 
*/
// let numero1 = parseInt(prompt("Ingrese el primer número entre 1 y 50: "));
// let numero2 = parseInt(prompt("Ingrese el segundo número entre 1 y 50: "));

// if (numero1 < 1 || numero1 > 50 || numero2 < 1 || numero2 > 50) {
//   console.log("Error - Ingrese números dentro del rango 1 - 50.");
// } else {
//   for (let i = 1; i <= 50; i++) {
//     let mensaje = i === numero1 || i === numero2 ? " ¡Lotería!" : "";
//     console.log(i + mensaje);
//   }
// }

/*
 Escriba un programa de JavaScript que itera enteros del 1 al 100. Pero para
múltiplos de tres, imprima "Fizz" en lugar del número y para múltiplos de cinco
imprima "Buzz". Para números múltiplos de tres y cinco, imprima "FizzBuzz".
*/
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} FIZZ BUZZ`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} Fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} Buzz`);
//   }
// }

/* 
Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que
el número efectivamente esté en ese rango, si no lo está imprima un mensaje de
error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si
está entre 6 y 8, “bien” si es 9 y, por último, “excelente” si es 10. 
*/

// calificacion = parseInt(prompt("Ingresa una calificacion del 1 al 10"));

// if (calificacion < 0 && calificacion > 10) {
//   console.log("Error!!!");
// } else if (calificacion < 6) {
//   console.log("Reprobado");
// } else if (calificacion >= 6 && calificacion <= 8) {
//   console.log("Regular");
// } else if (calificacion === 9) {
//   console.log("Bien");
// } else {
//   console.log("Excelente");
// }

/*
Escribe un programa que responda a un usuario que quiere comprar un helado
en una conocida marca de comida rápida, cuánto le costará en función del
topping que elija.
• El helado sin topping cuesta 50 MXN.
• El topping de oreo cuesta 10 MXN.
• El topping de KitKat cuesta 15 MXN.
• El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le
indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el
precio del helado sin ningún topping.
*/
// let tipo = prompt("Elije un topping : ");
// let topping = tipo;

// switch (topping) {
//   case "oreo":
//     console.log("Cuesta 10 MXN");
//     break;
//   case "kitkat":
//     console.log("Cuesta 15 MXN");
//     break;
//   case "brownie":
//     console.log("Cuesta 20 MXN");
//     break;

//   default:
//     console.log("El topping que elejiste cuesta 50 MXN");
//     break;
// }

/* 
Un conocido portal de educación en tecnología está ofreciendo programas para
aprender a desarrollar aplicaciones. Escribe un programa que le indique a la
persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción
elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo
mensual:
• Course: $4999 MXN
• Carrera $3999 MXN
• Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento
correspondiente al precio final.
• Beca Facebook: 20% de descuento.
• Beca Google: 15% de descuento.
• Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto
gastaría en total por el curso elegido, tomando en cuenta las siguientes
duraciones:
• Course: 2 meses
• Carrera 6 meses
• Master: 12 meses

*/

// let programa = prompt("¿Qué programa usarás (course/carrera/master)?");
// let beca = prompt("Ingresa el tipo de beca (facebook/google/jesua):");

// let duracion = 0;
// let precio = 0;
// let descuento = 0;

// switch (programa) {
//   case "course":
//     duracion = 2;
//     precio = 4999;
//     break;
//   case "carrera":
//     duracion = 6;
//     precio = 3999;
//     break;
//   case "master":
//     duracion = 12;
//     precio = 2999;
//     break;
//   default:
//     break;
// }

// switch (beca) {
//   case "facebook":
//     descuento = 0.2;
//     break;
//   case "google":
//     descuento = 0.15;
//     break;
//   case "jesua":
//     descuento = 0.5;
//     break;

//   default:
//     break;
// }

// let costoDescuento = precio * descuento;
// let descuentoMensual = precio - costoDescuento;
// let costoTotal = descuentoMensual * duracion;

// console.log("El costo total del programa es : " + costoTotal.toFixed(2));

/*
Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
distancia recorrida por un vehículo con cargo extra por los litros consumidos,
tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser
0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es
mayor la cantidad de litros consumidos se ha de añadir 10 al total.
Considere:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.
*/
let tipo = prompt("Ingresa el tipo de vehiculo (coche/moto/autobus) : ");
let precioKilometro = 0;

switch (tipo) {
  case "coche":
    precioKilometro = 0.2;
    break;
  case "moto":
    precioKilometro = 0.2;
    break;
  case "autobus":
    precioKilometro = 0.5;
    break;
  default:
    break;
}

let kmsRecorridos = parseFloat(
  prompt("Ingresa la distancia recorrida en kilómetros: ")
);

let litrosConsumidos = parseFloat(
  prompt("Ingresa la cantidad de litros consumidos : ")
);

let costoKilometro = precioKilometro * kmsRecorridos;
let cargoExtra = 0;
if (litrosConsumidos <= 100) {
  cargoExtra = 5;
} else {
  cargoExtra = 10;
}

let totalPagar = costoKilometro + cargoExtra;
console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);
