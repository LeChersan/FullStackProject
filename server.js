// Importacion de paquetes
const express = require('express')
const app = express()
const hbs = require ('hbs')

// Configuracion del puerto
const port = process.env.PORT || 3000;
// Configuracion de carpeta public
app.use(express.static(__dirname + '/public'));

// Configuracion hbs
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');

// Configuracion GET home
app.get('/', function (req, res) {
    res.render('home', {
        title:'home'
    });
})

app.get('/blog', function (req, res) {
    res.render('blog', {
        title: 'blog'
    });
})
// Encendido del servidor
app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
})
