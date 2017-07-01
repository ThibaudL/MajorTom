const express = require('express');        // call express
const geolib = require('geolib');        // call geolib
const app = require("./server").getApp();
const port = require("./server").getPort();
const router = express.Router();

const homeDb = require("../db/home/homeDb");
const db = require("../db/home/homeDb").getDb();

const ZWave = require("../zWaveMock/ZWave").getZWave();

//POST
router.post('/iamhere/:lat/:long', function (req, res) {


    console.log("iamhere/:lat/:long", parseFloat(req.params.lat), parseFloat(req.params.long));
    homeDb.initDatabase().then((collection) => {
        const home = collection.find({name: "home"})[0];
        const latHome = home.position.lat;
        const longHome = home.position.long;

        console.log(latHome, longHome);
        const distance = geolib.getDistanceSimple(
            {latitude: latHome, longitude: longHome},
            {latitude: req.params.lat, longitude: req.params.long}
        );
        console.log(distance);

        if (distance < 30000) {
            ZWave.setNodeOn("chaudiere");
        } else if (home.empty) {
            ZWave.setNodeOff("chaudiere");
        }

        res.json(distance);
    });
});


app.use('/api/geolocalisation', router);
console.log('http://localhost:' + port + '/api/geolocalisation');
