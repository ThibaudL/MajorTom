const express = require('express');        // call express
const app = require("./server").getApp();
const port = require("./server").getPort();
const router = express.Router();

const pieceDb = require("../db/scenarios/scenariosDb");
const db = require("../db/scenarios/scenariosDb").getDb();

const ZWave = require("../zWaveMock/ZWave").getZWave();

//GET
router.get('/', function (req, res) {
    pieceDb.initDatabase().then((collection) => {
        res.json(collection.find());
    });
});

//POST
router.post('/', function (req, res) {
    pieceDb.initDatabase().then((collection) => {
        collection.insert(req.body);
        db.saveDatabase();
        res.json(req.body);
    });
});

//PUT
router.put('/', function (req, res) {
    pieceDb.initDatabase().then((collection) => {
        collection.update(req.body);
        db.saveDatabase();
        res.json(req.body);
    });
});

//DELETE
router.delete('/', function (req, res) {
    pieceDb.initDatabase().then((collection) => {
        const toDelete = collection.remove(req.body);
        db.saveDatabase();
        res.json(toDelete);
    });
});

//POST
router.post('/:id/activate', function (req, res) {
    pieceDb.initDatabase().then((collection) => {
        collection
            .find({id : req.params.id})
            .appareils
            .forEach((appareil) => {
                ZWave.setLevel(appareil.piece+'/'+appareil.appareil,appareil.value);
            });
        db.saveDatabase();
        res.json(toDelete);
    });
});

app.use('/api/scenarios', router);
console.log('http://localhost:' + port + '/api/scenarios');
