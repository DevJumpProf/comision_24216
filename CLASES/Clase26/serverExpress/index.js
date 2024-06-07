const express = require ("express")
const app = express()

const port = 3030


     /*     ruta - metodo= controladores */
app.get ("/",(req,res)=>{
res.send ("estas en el home con el servidor express")
})

app.get ("/conocenos",(req,res)=>{
    res.send ("estas conocenos ")
    })

app.listen (port,()=>{
    console.log(`server ok en el puerto ${port}`);
})
    


/* npm i nodemon -g */

/* MVC */



/* CRUD                  METODOS DE HTTP
LEER  - READ =             GET
ESCRIBIR - CREATE =        POST
ACTUALIZA - UPDATE =       PUT
BORRAR - DELETE =          DELETE */

/* /HOME - ruta
LEER  - READ = GET
ESCRIBIR - CREATE = POST
ACTUALIZA - UPDATE = PUT
BORRAR - DELETE = DELETE
 */
/* /REGISTRATE - ruta
ESCRIBIR - CREATE = POST */

/* /USER  - ruta
LEER  - READ = GET
ESCRIBIR - CREATE = POST
ACTUALIZA - UPDATE = PUT
BORRAR - DELETE = DELETE */


