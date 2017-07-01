const express = require('express');        // call express
const app = express();                 // define our app using express
const bodyParser = require('body-parser');

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
