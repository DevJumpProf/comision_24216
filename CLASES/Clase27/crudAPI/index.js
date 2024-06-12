const express = require ("express")
const app = express()
const port = 3030
const cors = require ("cors")
const posteosRouter = require ("./routes/posteosRouter.js")

app.use(cors())
app.use(express.json()) //  analizados en formato req.body

    /* PEDIDO HTTP/RUTA - FUNCION = CONTROLER     */
app.get ("/",(req,res)=>{
res.send ("estas en el home")
}) // sin modularizar

app.use ("/posteos",posteosRouter)

app.listen (port,()=>{
    console.log(`servidor OK en el puerto ${port}`);
})

