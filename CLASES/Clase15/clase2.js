// interacciones
//prompt
/*  let nombre = prompt ("Decime tu nombre") */
/* 
document.write(nombre);
 */

/* alert ("hola " + nombre) */

/* confirm ("Deseas ingresar") */
/* 
javascript
interpretado
case sensitive
*/
/* 
let hola ;
let Hola */
/* 
let num1 = prompt("decime un numero")
let num2 = prompt("decime otro numero") */
/*   concatena   "1"     "2"   "12" */
/* document.write (num1+num2) */
/* 
let num1 =parseInt(prompt("decime un numero")) */

/* NUMBER */
/* let num1 =Number(prompt("decime un numero"))
let num2 = Number(prompt("decime otro numero") )

document.write (num1+num2)  */

/* En operaciones que no sean sumas se realiza la operacion matematica */
/* let num1 = prompt("decime un numero")
let num2 = prompt("decime otro numero")  */
/*  document.write (num1*num2) */

/* operadores matematicos */

console.log(21 + 7); /* SUMA */
console.log(21 - 7); /*  RESTA */
console.log(21 * 7); /* MULTIPLICACION */
console.log(21 / 7); /* DIVISION */
console.log(28 % 7); /* MODULO */

/* Operadores de comparación */
let num1 = 32;
let num2 = 40;
let num3 = "32";
let num4 = 32;

console.log(num1 == num3); /* es igual? */
console.log(num1 === num3); /* estrictamente igual */
console.log(num1 != num3); /*  no igual a */
console.log(num1 !== num3); /* estrictamente no igual */
console.log(num1 > num2); /*  mayor */
console.log(num2 < num3); /* menor */
console.log(num1 >= num4); /* mayor o igual */
console.log(num1 <= num2); /* menor o igual */

/* OR AND */
/*  ||      &&*/
// true  //false
console.log(num1 == num3 || num1 > num2); /* este o este true */

console.log(num1 == num3 && num1 > num2); /*  este y este  true */

// condicionales
/* let nombre = prompt ("decime tu nombre") */
/* let edad =Number (prompt(nombre + "decime tu edad")) */

/*   condicion */
/* if (edad>=18) {
alert(nombre+" podes Pasar")     */
/*  = true */
/* }else {
   alert(nombre+" No podes Pasar") */
/*   = false */
/* } */

/* IF TERNARIO  */

/* let edad = 18 */
/* CONDICION */ //?TRUE                                  //:FALSE
/* edad>=18 ? console.log(`TENES ${edad} AÑOS, PODES PASAR`) : console.log( `TENES ${edad} AÑOS, NOP PODES PASAR`); */

/* concatenación */
/* let nombre =  "Agostina"
let edad = 38
console.log(nombre + " como estas" + " tenes " + edad + " Años"); */

/* "backtick" */
/* console.log(`${nombre} como estas, tenes ${2+2}`); */
/* alt+96 */
/* altGr +} */

var nota = 9;
console.log("He realizado mi examen.");
// Condición
if (nota < 5) {
  calificacion = "Insuficiente";
} else if (nota < 6) {
    
} else if (nota < 8) {
  calificacion = "Bien";
} else {
  calificacion = "Sobresaliente";
}
console.log("He obtenido un", calificacion);

/* ternario */

nota < 5
  ? console.log((calificacion = "Insuficiente"))
  : nota < 6
  ? console.log((calificación = "Suficiente"))
  : nota < 8
  ? console.log((calificacion = "Bien"))
  : console.log((calificacion = "Sobresaliente"));

/* metodo para contar caracteres .length */
/* 
let nombre = "Tobias" */
/* console.log(nombre.length); */

/* let edad = 18 */
/*         true */
/* if (edad>=18 || nombre.length>=6){
    console.log(`${nombre} tu nombre tiene ${nombre.length} TENES UN REGALO`);
}else {
    console.log(`${nombre} tu nombre tiene ${nombre.length} TENES UN REGALO
    `);
} */

/* SWITCH */

let semaforo = "verdes";

switch (semaforo) {
  case "rojo":
    console.log("no podes avanzar");
    break;
  case "amarillo":
    console.log("precaucion");
    break;
  case "verde":
    console.log("Avanzar");
    break;
  default:
    console.log("no pusiste un color correcto");
    break;
}
