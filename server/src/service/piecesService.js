const express = require('express');        // call express
const app = express();                 // define our app using express
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
const router = express.Router();

const pieceDb = require("../db/piece/pieceDb");
const db = require("../db/piece/pieceDb").getDb();

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

app.use('/api/pieces', router);

app.listen(port);
console.log('http://localhost:' + port + '/api/pieces');
