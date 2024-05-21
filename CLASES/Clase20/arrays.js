/* ARRAYS MATRICES ARREGLOS */

/* 
const datos = ["cadenas", 123, true,["dato1","dato2"]]  */

const numeros = [1,2,8,7,4,6,7,3,12]

   // INDICES         0       1        2        3         4       5
const animales = ["Gato", "Perro", "Conejo", "Perro", "Tortuga"]
/* ELEMENTOS       1        2          3         4        5*/


/* splice cambia el contenido de un array eliminando los elementos existentes y/o agregando nuevos elementos */
/* animales.splice (2,2,"Tiburon")
console.log(animales); */

/* slice () devuelve una copia de una parte del array dentro de un nuevo array, empezando por el inicio hasta el fin ( fin no esta incluido ) no modifica el array actual */

/* const nuevoArray = animales.slice(0,3)
console.log(nuevoArray ); */


/* Retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente */ 
/* 
let ind= animales.indexOf ("Conejo")
console.log(ind); */

/* reduce() : Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor. */
/* const resultado = numeros.reduce((acumulador,actual)=>acumulador+actual)
console.log(resultado); */

/* includes() : Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.
.includes
 */
/* console.log(animales.includes("Tortuga"));
 */
/* every() : Es similar al some(), ya que itera el array y retorna un booleano. Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada. */
/* console.log(numeros.every(numero=>numero>0)); */

/* some() : Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array
.some */
/* console.log( numeros.some (numero=>numero<5)); */

/* .find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.
.find */

/* const mayorATres = numeros.find( numero=>numero>3)
console.log(mayorATres); */

/* forEach  Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo. */

/*  animales.forEach((animal,i)=>{
console.log(` Animal : ${animal} posicion : ${i}`);
})
 */

/* .filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición
.filter */

/* const nuevoArray = animales.filter (animal=>animal==="Perro"||animal==="Gato")
console.log(nuevoArray); */



/* .map permite recorrer el array y modificar los elementos presentes en el
RETORNANDO UN NUEVO ARRAY con la misma longitud */
/* const nuevoArray = numeros.map (numero => numero*10)
console.log(nuevoArray); */


/* .shift () = elimina el elemento en la primera posicion del array */
/* animales.shift ()
console.log(animales)
 */

/* .unshift (element) = coloca un nuevo elemento en la primera posicion del array */
/* animales.unshift ("Zorro")
console.log(animales); */

/* .pop */
/* animales.pop()
console.log(animales); */

/* .push 
.push agrega un elemento al final del array,aunmenta su longitud en 1
*/

/* animales.push("Elefante")
console.log(animales); */


/* como acceder dinamicamenta al ultimo elemento */
                         //    5
/* console.log(animales [animales.length-1]); */




/* ACCEDER A LOS ELEMENTOS */

/* console.log(animales[4]);
let scooby = animales[1]
console.log(scooby); */
/* REASIGNACION
 */

/* animales [4] = "Pez"
console.log(animales);

 */

/* .length
Al igual que el tipo de dato _String_ tiene un método incorporado `.length`, también lo hace la matriz. De hecho, la matriz tiene muchos métodos incorporados útiles (los discutiremos en lecciones posteriores). Al igual que la cadena `.length` cuenta los caracteres, la matriz` .length` devolverá el número de elementos en una matriz: */
/* console.log(animales);
console.log(animales.length); */


/* caracter especifico de un String */
/* let gato = "Gato"
console.log(gato[0]); */