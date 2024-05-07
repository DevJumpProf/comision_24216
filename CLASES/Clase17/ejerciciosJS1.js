
// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "cadena de texto";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1985;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
return(str)
}
devolverString("Cadena de texto");
console.log(devolverString("cambiar el valor cuando la vuelvo a invocar"));

const suma = (x, y) => x+y
console.log(suma(10,10));


function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
return x-y
}
console.log(resta(10,5));

const resta1 = (x,y) => {return x-y};console.log(resta1(100,5));

const resta2 = (x,y) => x-y;console.log(resta1(100,5));

/* let nombre = "juan"
nombre= "pepe"
console.log(nombre); */

/* function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
return x*y
}
console.log(multiplica(10,2));
 */

const multiplica = (x,y)=> x*y ; console.log(multiplica(10,2));

const divide = (x, y) => x/y ; console.log(divide(21,7));

/* function sonIguales(x, y) {

if (x===y){
return true
}else{
return false
}

}
console.log(sonIguales(11,10)); */

const sonIguales = (x, y) =>  x===y;console.log(sonIguales(11,10));

const tienenMismaLongitud =(str1, str2)=>str1.length === str2.length
console.log(tienenMismaLongitud("hola", "cha"));

const  menosQueNoventa = num => num<90  ; console.log(menosQueNoventa(90));

const mayorQueCincuenta = num=> num>50; console.log(mayorQueCincuenta(49));

const obtenerResto = (x, y) => x % y ; console.log(obtenerResto(22,7));

const esPar = num => num%2 == 0 ; console.log(esPar (10));

const esImpar = num => num%2!=0; console.log(esImpar(10));

const elevarAlCuadrado = num => Math.pow (num,2)
/* console.log(elevarAlCuadrado("3")); */
console.log(elevarAlCuadrado(3));

/* Math  */

const elevarAlCubo = num => Math.pow(num,3) ; console.log(elevarAlCubo(3));

const elevar = (num, exponent)=> Math.pow (num,exponent) ;console.log(elevar (21,5));

const redondearNumero = num => Math.round (num) ; console.log(redondearNumero(3.7));

const redondearHaciaArriba=num=> Math.ceil (num); console.log(redondearHaciaArriba(3.9))

const redondearHaciaAbajo=num=> Math.floor (num); console.log(redondearHaciaAbajo(3.9))

/* const numeroRandom=() => Math.round(Math.random()*10);
 console.log(numeroRandom());
 console.log(numeroRandom());
 console.log(numeroRandom());
 console.log(numeroRandom());
 console.log(numeroRandom());
 console.log(numeroRandom());
   */
  
 
function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:

}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:

}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:

}

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

}

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí


}

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí


}
