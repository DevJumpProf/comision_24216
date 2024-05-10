/* OBJETOS */

/* CLAVES : VALORES */
/* METODOS */

const celular = {
/* CLAVES : VALORES */
marca : "Motorola",
modelo: "V3",
stock : true,
/* metodos */
encender : ()=> (`el celular ${celular.marca} ${celular.modelo} está encendido`)
}

/* notacion de puntos */
console.log(celular);
console.log(celular.marca);
console.log(celular.encender());

/* ... spread operator */

const generoAventura = {
    nombreGenero : "Aventura",
    puesto: 1,
    habilitado : true
}

const pelicula = {
    nombre : "El gran Pez",
    director : "Tim Burton",
    estreno : 2003,
    puesto:2,
    ...generoAventura,
}
console.log(pelicula.puesto);

/* DESTRUCTURING */

/* copiar datos SIN DESTRUCTURACION */
/* let nombrePelicula = pelicula.nombre
console.log(nombrePelicula); */

/* copiar datos CON DESTRUCTURACION */

let {director,nombre:nombrePelicula} = pelicula

console.log(nombrePelicula);
console.log(director);

