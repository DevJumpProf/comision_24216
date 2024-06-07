const http = require ("http")

http.createServer((req,res)=>{
res.writeHead(200,{"content-type": "text/plain"})
if (req.url=="/"){
    res.end ("Estas en el home de NODE")
}else if (req.url=="/conocenos"){
    res.end ("Estas en conocenos")
}else {
    res.end("Error 404")
}

}).listen (3030,"localhost")