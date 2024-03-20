const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

/**
* Importar rutas
*/
const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');
app.set('port', port);

/**
* LLamando las rutas
*/
userRoutes(app);

//direccion ip V4 de la maquina, consultar con ipconfig
server.listen(3000, '192.168.2.11' || 'localhost', function() {
console.log('Aplicación de NodeJS ' + process.pid + ' inicio en el puerto ' + port);

app.get('/', (req, res) => {
    res.send('Ruta raiz del Backend');
});

//Error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
    });

})