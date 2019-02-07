const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();

app.use(cors({ origin: `http://localhost:3000` }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);

app.listen(port, (err) => {
    (err) ? console.error(`Erro ao iniciar o servidor : ${err} `) :
        console.log(`Servidor inciado com sucesso na porta ${port} `);
});