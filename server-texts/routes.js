const jsonData = require('./db.json'); //
const jsonMembers = require('./members.json');
const express = require('express');
const router = express.Router();


router.get("/home/texts/:id_start/:id_end", (req, res) => {
    const id1 = parseInt(req.params.id_start);
    const id2 = parseInt(req.params.id_end);
    var dataReturn = [];

    if (id2 < id1)
        return res.status(500).send(`Informe os parâmetros de forma correta`);

    for (var i = id1; i < id2; i++) {
        dataReturn.push(jsonData[i]);
    }

    return res.status(200).send(dataReturn);
});


router.get("/members", (req, res) => {
    return res.status(200).send(jsonMembers);
});







module.exports = app => app.use('/', router);