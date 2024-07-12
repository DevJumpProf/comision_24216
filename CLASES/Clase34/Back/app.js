const express = require ("express")
const bodyParser = require ("body-parser") // middleware para manejar solicitudes
const {check,validationResult} = require ("express-validator")

const cors = require ("cors")

const app = express()

app.use(bodyParser.json()) // parsear datos en formato JSON
app.use(bodyParser.urlencoded({extended:true})); // toma los datos en formato URL-encoded y los configura

app.use (cors())

// TAREA 
/* MODULARIZAR  -  RUTAS Y CONTROLADORES
LLEVAR A BASE DE DATOS (MODELO) */


/* express validator middleware */

app.post ("/registrar",[
    check("nombreUser").not().isEmpty().withMessage("Nombre de user no puede estar vacio").trim(), // valida que el nombre no esté vacion y lo sanitiza
    check("email").isEmail().withMessage("Debe ser un correo valido").normalizeEmail(),
    check("password").isLength({min:5}).withMessage("la contraseña debe tener minimo 5 caracteres")
],
    (req,res)=>{
     console.log("datos recibidos:",req.body);   //muestra en consola los datos recibidos

     const errores = validationResult(req) // tomar los errores de validacion

     if(!errores.isEmpty()){
        console.log("errores de validacion:",errores.array());// mostramos los errores de validacion
        return res.status(422).json({errores:errores.array()})//si hay errores , respondemos el estado 422 y los errores en formato json

     }
res.json ({message: "Registro Exitoso"})
})

const puerto = 3000

app.listen (puerto,()=>{
    console.log("servidor Ok en el puerto ",puerto);
})