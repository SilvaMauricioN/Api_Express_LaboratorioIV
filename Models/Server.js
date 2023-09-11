const express = require('express');
const errorController = require('../Controllers/Errores');
class Server{
    constructor(){
        this.port = process.env.PORT || 3000;
        this.app = express();
        this.app.disable('x-powered-by');
        this.middleware();
        this.routers();
    }
    middleware(){
        this.app.use(express.static('public'));
    }
    routers(){
        this.app.use('/api/MuseoRijks/',require('../Routes/Artista'));
        this.app.use('/api/MuseoRijks/',require('../Routes/Obras'))
        this.app.use(errorController.rutaNoDefinida);
    }
    listen() {
        this.app.listen(this.port, () =>{
            console.log(`Escuchando en el puerto http://localhost:${this.port}`);
        });
    }
}
module.exports = Server;