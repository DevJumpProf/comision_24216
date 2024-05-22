
/* por id */

/* let titulo = document.getElementById("titulo")
console.log(titulo); */


/* por clase */
/* let contenedor = document.getElementsByClassName("contenedor")
console.log(contenedor); */

/* por tag/etiqueta */
/* let parrafo = document.getElementsByTagName ("p")
console.log(parrafo); */


/* let titulo = document.getElementById("titulo")

titulo.innerHTML = "Estoy creando un titulo de forma dinamica"

let parrafo = document.getElementsByTagName ("p")

parrafo[0].innerHTML = "Este es el primer Parrafo"
parrafo[1].innerHTML = "Este es el Segundo Parrafo" */


/* selectores de css
h1
.contenedor
#titulo */

/* let parrafo = document.querySelector("p")
let parrafos = document.querySelectorAll("p") */
/* let parrafos = document.querySelectorAll("p")[0] */
/* console.log(parrafos) */

/* let contenedor = document.querySelector(".contenedor")

contenedor.innerHTML = `<img src='./imagen.png' alt='imagen' width="100px" >`
 */
/* let boton = document.createElement ("button")
boton.innerHTML = "Soy Boton"
let contenedor = document.querySelector(".contenedor")
contenedor.appendChild (boton) */

/* let h1 = document.createElement("h1")
const texto = document.createTextNode ("Hola soy un titulo")
h1.appendChild(texto)
document.body.appendChild(h1)
 */


/* 
const p = document.getElementById("p1")
p.innerHTML = "Codo a Codo" // <p id="p1">Codo a Codo</p>
p.className = "dato"        // <p id="p1" class="data">Codo a Codo</p>
p.style.color = "red" 

const dato =document.querySelector(".dato")
dato.style.color="blue"

 */

let boton = document.createElement ("button")
boton.innerHTML = "Soy Boton"
let contenedor = document.querySelector(".contenedor")
contenedor.appendChild (boton) 

const evento = () =>{
return alert ("presionaste el boton")
}


/* boton.addEventListener("click",evento) */


/* boton.onClick() */  // investigacion











