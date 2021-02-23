const express = require('express');
const morgan = require('morgan');

const app = express();

//Settings
app.set('appName', 'Mi primer server express');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Requiriendo rutas
const routes = require('./routes');
const routesApi = require('./api');

//Middlewares
app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log('request url :' + req.url );
    next();
});

app.use((req, res, next) => {
    console.log('paso por esta funcion' );
    next();
});

//Routes
app.use(routes);
app.use('/api',routesApi);

app.get('*', (req, res)=>{
    res.end("File not found...");
});




//Server
app.listen(3000, ()=> {
    console.log('Servidor iniciado tgl');
    console.log('Nombre de la aplicacion: ', app.get('appName'));
});
