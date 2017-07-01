const loki = require('lokijs');

const COLLECTION_NAME = 'appareils';
const DATABASE_PATH = "database/MajorTom.db";

const db = new loki(DATABASE_PATH, {autoload: true});

let appareilDb = null;

module.exports = {
    appareilDb : appareilDb,
    initDatabase: () => {
        return new Promise((fullfill, reject) => {
            db.loadDatabase({}, () => {
                appareilDb = db.getCollection(COLLECTION_NAME);
                if (!appareilDb) {
                    console.log("Creation collection : ", COLLECTION_NAME);
                    appareilDb = db.addCollection(COLLECTION_NAME);
                    db.saveDatabase();
                    fullfill(appareilDb);
                }else {
                    fullfill(appareilDb);
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