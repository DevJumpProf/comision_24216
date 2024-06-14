const express = require ("express")
const app = express()
const port = 3030
const cors = require ("cors")
const posteosRouter = require ("./routes/posteosRouter.js")
const db = require ("./data/db.js")

app.use(cors())
app.use(express.json()) //  analizados en formato req.body

    /* PEDIDO HTTP/RUTA - FUNCION = CONTROLER     */
app.get ("/",(req,res)=>{
res.send ("estas en el home")
}) // sin modularizar

app.use ("/posteos",posteosRouter)

//conexion a la base de datos
const conexionDB = async ()=>{
    try {
       await db.authenticate()
       console.log(`conectado ok a la base de datos`);
    } catch (error) {
        console.log(`el error es : ${error}`);
    }
}

app.listen (port,()=>{
    conexionDB()
    console.log(`servidor OK en el puerto ${port}`);
})

