const express = require('express');        // call express
const app = require("./server").getApp();
const port = require("./server").getPort();
const router = express.Router();
const homeService = require("./homeService");
const ZWave = require("../zWaveMock/ZWave").getZWave();


const appareilsDb = require("../db/appareils/appareilsDb");
const db = require("../db/appareils/appareilsDb").getDb();



const osc = require('node-osc');

appareilsDb.initDatabase().then((collection) => {
    const oscServer = new osc.Server(9000, 'localhost');
    oscServer.on("message", function (msg) {
        const appareilSplited = msg[0].split("/");
        const appareil = {piece: appareilSplited[1], appareil: appareilSplited[2]};
        if(!msg[0].includes("/presence")) {
            console.log(appareil);
            collection.insert(appareil);
            db.saveDatabase()
        }else{
            homeService.updatePresence(appareil.piece,msg[1] != 1);
            console.log(appareil.piece,msg[1] != 1);
            if(msg[1] == 1){
                collection.find().forEach(a => {
                    if(appareil.piece === a.piece)
                        ZWave.setNodeOn(a.piece + (a.appareil ? ("/"+a.appareil) : ''));
                });
            }else{
                let interval;
                const handler = () => {
                    console.log(homeService.shouldRealyBeEmpty(appareil.piece));
                    if(homeService.shouldRealyBeEmpty(appareil.piece)){
                        collection.find().forEach(a => {
                            if(appareil.piece === a.piece)
                                ZWave.setNodeOff(a.piece+"/"+a.appareil);
                        });
                    }
                };
                setTimeout(handler,20000);
            }
        }
    });
    setTimeout(() => {
        ZWave.getScenes();
    }, 1000);


//POST
    router.post('/set/:id/:value', function (req, res) {
        ZWave.setLevel(req.params.id, req.params.value);
        res.json(req.body);
    });

//GET
    router.get('/', function (req, res) {
        res.json(collection.find());
    });


    app.use('/api/appareils', router);
    console.log('http://localhost:' + port + '/api/appareils');
});
