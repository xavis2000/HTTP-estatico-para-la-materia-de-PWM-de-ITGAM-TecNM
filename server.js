//http
var http = require("http");
//crear un servidor basico
var server = http.createServer(function(req, res){
    //armar la respuesta http
    //armar un encabezado http
    res.writeHead(200,{
        "Content-type" :"text/plain",
        "server" : "ITGAM@4.2.4"
    });
    //enviamos la respuesta
    res.write("Hola Mundo");
    //Cerrar la conexion
    res.end();
});
//poner a trabajar el server
server.listen(3000, '127.0.0.1', function(){
    console.log("> Server listening @http://localhost:3000 ...");
});