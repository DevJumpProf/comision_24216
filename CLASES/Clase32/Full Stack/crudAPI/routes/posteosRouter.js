
const express = require ("express")
const router= express.Router()

const {traerPosteos,traerUnPosteo,crearPosteo,actualizarPosteo,borrarPosteo } = require ("../controllers/posteosControllers.js")

router.get ("/",traerPosteos) 
router.get ("/:id",traerUnPosteo)
router.post ("/",crearPosteo) 
router.put ("/:id",actualizarPosteo ) 
router.delete ("/:id",borrarPosteo)
                    module.exports= router