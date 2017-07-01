const loki = require('lokijs');

const COLLECTION_NAME = 'lumieres';
const DATABASE_PATH = "database/MajorTom.db";

const db = new loki(DATABASE_PATH, {autoload: true});

let pieceDb = null;

module.exports = {
    initDatabase: () => {
        return new Promise((fullfill, reject) => {
            db.loadDatabase({}, () => {
                pieceDb = db.getCollection(COLLECTION_NAME);
                if (!pieceDb) {
                    console.log("Creation collection : ", COLLECTION_NAME);
                    pieceDb = db.addCollection(COLLECTION_NAME);
                    db.saveDatabase();
                    fullfill(pieceDb);
                }else {
                    fullfill(pieceDb);
                }
            },(error) => {
                reject(error);
            });
        });
    },
    getCollectionName: function () {
        return COLLECTION_NAME;
    },
    getDb: function () {
        return db;
    }
};