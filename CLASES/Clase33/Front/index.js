 // 1 Que cargue toodo el DOM = DOMContentLoaded

document.querySelector("#formRegistro").addEventListener("submit",(evento)=>{

evento.preventDefault(); // prevenir el comportamiento por defecto del formulario (recaargar la pagina)

/* Tomar los valores de los campos, NombreUser - Email -Password */

const nombreUser = document.querySelector("#nombreUser").value
const email = document.querySelector("#email").value
const password = document.querySelector("#password").value

axios.post ("http://localhost:3000/registrar",{
    nombreUser:nombreUser,
    email:email,
    password:password
})
//2 REFACTORIZAR (ASYNC - AWAIT (TRY-CACTH))
.then(respuesta=>{
    document.querySelector("#mensajesValidacion").innerHTML="<p>Registro Exitoso</p>"

})
.catch(error=>{
/* console.log(error); */
if(error.response&&error.response.status===422){
const errores = error.response.data.errors; //si hay errores de validacion , los guardo
let mensajesdeError = "<ul>";

errores.forEach(error =>{
/*     console.log(error); */
    mensajesdeError+=`<li>${error.msg}</li>`// muestro cada error en una lista
})
mensajesdeError += "</ul>";
 document.querySelector("#mensajesValidacion").innerHTML=mensajesdeError //muetra los error en el HTML

}else {
    console.error(`Error en la solicitud "${error.message}`) // si hay otro tipo de error lo mostralo en consola
}
})




})