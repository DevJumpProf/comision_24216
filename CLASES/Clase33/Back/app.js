const express = require ("express")
const bodyParser = require ("body-parser") // middleware para manejar solicitudes
const {check,validationResult} = require ("express-validator")
 // solicitudes cliente - servidor 
/*  que tengo que requerir ? */

app.use(bodyParser.json()) // parsear datos en formato JSON
app.use(bodyParser.urlencoded({extended:true})); // toma los datos en formato URL-encoded y los configura

// configurar CORs


