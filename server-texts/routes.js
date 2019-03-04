const jsonData = require('./json_files/db.json');
const jsonMembers = require('./json_files/members.json');
const jsonVideos = require('./json_files/videos.json');
const jsonArticles = require('./json_files/articles.json');
const express = require('express');
const router = express.Router();


router.get("/home/texts/:id_start/:id_end", (req, res) => {
    const i1 = parseInt(req.params.id_start);
    const i2 = parseInt(req.params.id_end);
    var dataReturn = [];

    if (i2 < i1)
        return res.status(500).send(`Informe os parâmetros de forma correta`);

    for (var i = i1; i < i2; i++) {
        dataReturn.push(jsonData[i]);
    }

    return res.status(200).send(dataReturn);
});


router.get("/members", (req, res) => {
    return res.status(200).send(jsonMembers);
});

router.get("/member/by/id/:id", (req, res) => {
    let member = parseInt(req.params.id);

    let data = jsonMembers.find((item) => {
        return item.id === member;
    });

    if (!data)
        return res.status(500).send("Membro não encontrado");

    return res.status(200).send(data);
});

router.get("/videos/:id_start/:id_end", (req, res) => {
    const i1 = parseInt(req.params.id_start);
    const i2 = parseInt(req.params.id_end);
    var dataReturn = [];

    if (i2 < i1)
        return res.status(500).send(`Informe os parâmetros de forma correta`);

    for (var i = i1; i < i2; i++) {
        dataReturn.push(jsonVideos[i]);
    }

    return res.status(200).send(dataReturn);

});

router.get("/articles/:id", (req, res) => {
    const id1 = parseInt(req.params.id);

    let data = jsonArticles.find((item) => {
        return item.id === id1
    });

    if (!data)
        return res.status(500).send("Ocorreu algum erro na busca do artigo");

    return res.status(200).send(data);
});


module.exports = app => app.use('/', router);