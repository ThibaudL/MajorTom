// require("./service/piecesService");
// require("./service/utilisateursService");
// require("./service/lumieresService");
require("./service/appareilsService");
require("./service/geolocService");

const osc = require('node-osc');

const oscServer = new osc.Server(9000, 'localhost');
oscServer.on("message", function (msg, rinfo) {
    console.log("Message:");
    console.log(msg);
    console.log(rinfo);
});


// setTimeout(() => {
//     const client = new osc.Client('192.168.110.198', 8000);
    // client.send('/cuisine', 50.0);
    // client.send('/status', 1);
// },250);



