
document.addEventListener("DOMContentLoaded",()=>{
    //obtener el formulario de edicion
    const formulario = document.querySelector("#formEditarPosteo")
    // obtenemos los parametros de la URL

    const parametrosURL = new URLSearchParams(window.location.search)
    const IdPosteo =parametrosURL.get(id)


    // funcnion parta obtener los datos del posteo x ID

    const fetchPosteo = async (id) =>{
        try {
            const respuesta = await axios.get (`http://localhost:3030/posteos/${id}`)
            /*     console.log(respuesta); */
            const posteo = respuesta.data
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





})