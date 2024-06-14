
/* CRUD */
const traerPosteos=(req,res)=>{
    res.send("Te envio desde la BDtodos los posteos")
}

const traerUnPosteo=(req,res)=>{
    res.send("Te envio  UN posteo")
}

module.exports= {traerPosteos,traerUnPosteo}