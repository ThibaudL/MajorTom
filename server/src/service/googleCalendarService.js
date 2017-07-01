const express = require('express');        // call express
const app = require("./server").getApp();
const port = require("./server").getPort();
const router = express.Router();

const pieceDb = require("../db/appareils/appareilsDb");
const db = require("../db/appareils/appareilsDb").getDb();

const ZWave = require("../zWaveMock/ZWave").getZWave();

//POST
router.post('/set/:id/:value', function (req, res) {
    ZWave.setLevel(req.params.id,req.params.value);
    res.json(req.body);
});


app.use('/api/appareils', router);
console.log('http://localhost:' + port + '/api/appareils');
