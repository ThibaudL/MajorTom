const express = require('express');        // call express
const app = express();                 // define our app using express
const bodyParser = require('body-parser');
const router = express.Router();
var cors = require('cors')
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.listen(port);
module.exports = {
    getApp: function () {
        return app;
    },
    getPort : function(){
        return port;
    }
};

//GET
router.get('/', function (req, res) {
    res.json({
        geolocalisation : [
            {
                method : "POST",
                url : "http://localhost:8080/api/geolocalisation/iamhere/:lat/:long"
            },{
                method : "POST",
                url : "http://localhost:8080/api/geolocalisation/thisishome/:lat/:long"
            }
        ],
        appareils : [
            {
                method : "POST",
                url : "http://localhost:8080/api/appareils/set/:id/:value"
            },
            {
                method : "GET",
                url : "http://localhost:8080/api/appareils"
            }
        ],
        scenarios : [
            {
                method : "POST",
                url : "http://localhost:8080/api/scenarios"
            },
            {
                method : "GET",
                url : "http://localhost:8080/api/scenarios"
            },
            {
                method : "PUT",
                url : "http://localhost:8080/api/scenarios"
            },
            {
                method : "DELETE",
                url : "http://localhost:8080/api/scenarios"
            }
        ]
    });
});

app.use('/api/help', router);

