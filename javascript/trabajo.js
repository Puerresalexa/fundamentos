//ejercicio 1
let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");

if (num1 > num2) {
  console.log(num1 + " es mayor que " + num2);
} else if (num2 > num1) {
  console.log(num2 + " es mayor que " + num1);
} else {
  console.log("Ambos números son iguales");
}

//ejercicio 2
let nul1=prompt("ingrese un numero")
let nul2=prompt("ingrese otro numero")

if (nul1===nul2) {
    console.log("son iguales")
} else {
    console.log("son diferentes")
}

//ejercicio 3
let edad= prompt ('igrese su edad')

if (edad>=18) {
    console.log ('si puede entrar')
} else {
    console.log ('no puede ingresar')
}

//ejercicio 4
let numerito= prompt ('ingrese un numero')

if (numerito>=50 && numerito<=100) {
    console.log ('si esta en el rango' +numerito)
} else {
    console.log ('no esta en el rango' +numerito)
}

//ejercicio 5
let num=prompt ("ingrese un numero")
if (num>1 && num <=10) {
    console.log ("si esta en el rango requerido" +num)
} else {
    console.log ("no esta en el rango requerido" +num)
}

//ejercicio 6
let numero = prompt("Ingrese un número:");

if (numero < 10) {
  console.log("Pequeño");
} else if (numero >= 10 && numero <= 90) {
  console.log("Mediano");
} else {
  console.log("Grande");
}