const cryptoJS = require ("crypto-js")


const mensaje = "Mensaje Secreto"
const clave = "Clavesecreta123456"

// encriptarlo 
const mensajeEncriptado = cryptoJS.AES.encrypt(mensaje,clave).toString();
console.log(mensajeEncriptado);

/* const key = "Clavesecreta123456" */

// descifrarlo
const mensajeDesencriptado = cryptoJS.AES.decrypt(mensajeEncriptado,"Clavesecreta123456").toString(cryptoJS.enc.Utf8);
console.log(mensajeDesencriptado);

