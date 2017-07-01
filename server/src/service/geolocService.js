const express = require('express');        // call express
const geolib = require('geolib');        // call geolib
const app = require("./server").getApp();
const port = require("./server").getPort();
const router = express.Router();
const homeService = require("./homeService");

const ZWave = require("../zWaveMock/ZWave").getZWave();

//POST
router.post('/iamhere/:lat/:long', function (req, res) {
    console.log("iamhere/:lat/:long", parseFloat(req.params.lat), parseFloat(req.params.long));
        const home = homeService.getCoordonneesHome();

        console.log(home.lat, home.long);
        const distance = geolib.getDistanceSimple(
            {latitude: home.lat, longitude : home.long},
            {latitude: req.params.lat, longitude: req.params.long}
        );
        console.log(distance);

        if (distance < 30000) {
            ZWave.setNodeOn("chaudiere0");
        } else if (homeService.shouldRealyBeEmpty()) {
            ZWave.setNodeOff("chaudiere0");
        }

        res.json(distance);
});

//POST
router.post('/thisishome/:lat/:long', function (req, res) {
    console.log("thisishome/:lat/:long", parseFloat(req.params.lat), parseFloat(req.params.long));
    homeService.setCoordonneesHome(parseFloat(req.params.lat), parseFloat(req.params.long))
    res.json("\"Thanks\"");
});


app.use('/api/geolocalisation', router);
console.log('http://localhost:' + port + '/api/geolocalisation');
