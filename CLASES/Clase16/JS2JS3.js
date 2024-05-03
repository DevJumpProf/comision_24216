/* js2 */
/* estructuras de control */

/* while bucles simples */
/* let numero = 450

while (numero<1000){
    numero++;
console.log(numero);
}
 */

/* do while bucles simples que se realizan como minimo una vez */
/* let numero= 7
do {
    numero++
    console.log(numero);
}while(numero<10)
 */


/* for basico por excelencia */

/* for (let i=1;i<=10;i++){
    console.log(2*i);
}

for (i=0; i<5;i++){
    console.log(`el valor de i es ${i}`);
} */

/* js3 */

/* funciones */

function saludar () {
    console.log("!hola soy una funcion");
}
saludar()
                   //parametros
function saludo2(nombre, edad){
    console.log(`hola ${nombre} tu edad es ${edad}`);
}
saludo2("Juan", 38)  //argumentos
saludo2("Juana", 36) 

// return
function suma (num1,num2){
    return num1+num2
}
console.log( suma (10,10));


/* arrow function */
/*  => */

const resta = (num1,num2) => {
    return num1-num2
}
console.log(resta(10,2));

/* const saludo3 = (nombre)=>{
    return `Hola ${nombre}`
}
console.log(saludo3("Natalio")); */
/* 
const saludo3 = nombre=> `Hola ${nombre}`;console.log(saludo3("Natalio")); */


/* SCOPE */
/* local */
/* console.log(carNAme); */
function myFunction (){
 let carNAme = "volvo"
    console.log(carNAme);
}
/* console.log(carNAme); */

myFunction()

/* global */
var nombre = "Agostina"
console.log(nombre);
function Saludo4(){
    console.log(nombre);
}
console.log(nombre);
Saludo4()
/* 
info extra
https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/ */

/* callbacks */

const calculadora = (num1,num2,operacion) => operacion (num1,num2)

let sumar = (num1,num2)=> num1+num2
let restar = (num1,num2)=> num1-num2
let multiplicar = (num1,num2)=> num1*num2
let dividir = (num1,num2)=> num1/num2

console.log(calculadora (10,10,sumar));
console.log(calculadora (10,10,restar));
console.log(calculadora (10,10,multiplicar));
console.log(calculadora (10,10,dividir));




