const express = require('express');        // call express
const app = require("./server").getApp();
const port = require("./server").getPort();
const router = express.Router();

const pieceDb = require("../db/lumieres/lumieresDb");
const db = require("../db/lumieres/lumieresDb").getDb();

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
        db.saveDatabase()
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

app.use('/api/lumieres', router);
console.log('http://localhost:' + port + '/api/lumieres');
