const http = require ("http") // traigo http : modulo nativo de node
/* import http from "http"  */


http.createServer((req,res)=>{ // funcion create server con callback (req,res)
res.writeHead(200,{"content-Type": "text/plain"}) //indico que voy a devolver texto plano
res.end("mi primer servidor nativo NODE") //texto salida
}).listen(3030,"localhost") // escucha puerto y el origgen del servidor



