
document.addEventListener("DOMContentLoaded",()=>{
    //obtener el formulario de edicion
    const formulario = document.querySelector("#formEditarPosteo")
    // obtenemos los parametros de la URL

    const parametrosURL = new URLSearchParams(window.location.search)
    const IdPosteo =parametrosURL.get("id")


    // funcion parta obtener los datos del posteo x ID

    const fetchPosteo = async (id) =>{
        try {
            const respuesta = await axios.get (`http://localhost:3030/posteos/${id}`)
            /*     console.log(respuesta); */
            const posteo = respuesta.data
            console.log(posteo);
            // asignar los valores obtenidos a los campos del formulario
            document.querySelector("#nuevo-titulo").value = posteo.titulo
            document.querySelector("#nuevo-contenido").value = posteo.contenido
        } catch (error) {
            console.error('Error al obtener el post:', error);
        }
    }

    //llamar a la funcion para obtener el posteo
if (IdPosteo){
    fetchPosteo(IdPosteo)
}

// funcion para actualizar el posteo

formulario.addEventListener("submit", async function (evento){
    evento.preventDefault()

    const actualizarPosteo ={
        titulo:document.querySelector("#nuevo-titulo").value,
        contenido:document.querySelector("#nuevo-contenido").value
    }
    try {
        await axios.put(`http://localhost:3030/posteos/${IdPosteo}`,actualizarPosteo)
        alert (`Posteo ${IdPosteo} Actualizado` )
        //redirigir a la pagina principal
        window.location.href = "index.html"
    } catch (error) {
        console.error('Error al actualizar el post:', error);
    }
})

})

