//http
var http = require("http");
//Obteniendo informacion del enterno de ejecucion con respecto a la IP y al puerto que debemos usar en nuestro server
var PORT = process.env.PORT || 3000;
var IP =process.env.IP || '127.0.0.1';

//crear un servidor basico
var server = http.createServer(function(req, res){
    //armar la respuesta http
    //armar un encabezado http
    res.writeHead(200,{ 
        "Content-Type" :"text/plain",
        "server" : "ITGAM@4.2.4"
    });
    //enviamos la respuesta
    res.write("Hola Mundo");
    res.write("Javo");
    //Cerrar la conexion
    res.end();
});
//poner a trabajar el server
server.listen(3000, '127.0.0.1', function(){
    console.log("> Server listening @http://localhost:3000 ...");
    server.listen(PORT,IP,function () {
console.log(`> Server listening @http://${IP}:${PORT} ...`)
    });
});