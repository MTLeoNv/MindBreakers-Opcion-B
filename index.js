const express = require('express');
const app = express();
const PORT = 3000;

// Servir la carpeta 'Web' como estática
app.use(express.static('Web'));

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Ruta principal
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
