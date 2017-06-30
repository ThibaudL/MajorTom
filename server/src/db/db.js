const loki = require('lokijs')

let DATABASE_PATH = 'database/MajorTom.db';
const db = new loki(DATABASE_PATH);

module.exports = {
    getDb : function(){
        return db;
    },
    getPath : function(){
        return DATABASE_PATH;
    }
};