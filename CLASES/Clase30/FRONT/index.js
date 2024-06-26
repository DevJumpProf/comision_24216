/* DOMContentLoaded */
/* evento DOMContentLoaded para asegurar que el script se ejecute después de que el DOM se haya cargado completamente. */

document.addEventListener("DOMContentLoaded", ()=>{

const bodyTablaPosteos = document.querySelector ("#body-tabla-posteos")
const formCrearPosteos = document.querySelector("#form-crear-posteos")

/* FUNCION PARA OBTENER LOS DATOS DE NUESTRA API USANDO AXIOS */
const fetchPosteos = async ()=>{
try {
    const respuesta = await axios.get (`http://localhost:3030/posteos/`)
/*     console.log(respuesta); */
   const posteos = respuesta.data
   //limpiar la tabla antes de agregar nuevos datos
   bodyTablaPosteos.innerHTML="";

/*    iterar sobre los datos y agregar los nuevos */
posteos.forEach (posteo=>{
//crear una nueva fila
const fila = document.createElement("tr")
//crear las celdas para el titulo , contenido y acciones.
const celdaTitulo = document.createElement("td")
const celdaContenido = document.createElement("td")
const celdaAcciones = document.createElement("td")

// asignar el contenido a las celdas
celdaTitulo.textContent = posteo.titulo
celdaContenido.textContent = posteo.contenido

// crear boton de eliminar
const botonEliminar = document.createElement("button")
botonEliminar.textContent = "Eliminar"
botonEliminar.addEventListener("click",()=>(posteo.id)) // ojo con esto

// crear el boton de editar
const botonEditar = document.createElement("button")
botonEditar.textContent = "Editar"
botonEditar.addEventListener("click", ()=>{
  /*   redirigir a la pagina de edicion con el id del post en la URL */
window.location.href = `edit.html?id=${posteo.id}`
})
// agregar los botones a la celda de acciones
celdaAcciones.appendChild(botonEliminar)
celdaAcciones.appendChild(botonEditar)

// agregar las celdas a la fila
fila.appendChild(celdaTitulo)
fila.appendChild(celdaContenido)
fila.appendChild(celdaAcciones)

//agregar la fila al cuerpo de la tabla
bodyTablaPosteos.appendChild(fila)

})
} catch (error) {
    console.error("Error al obtener los post",error)
}
}
fetchPosteos()
})
