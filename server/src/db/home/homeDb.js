const loki = require('lokijs');

const COLLECTION_NAME = 'home';
const DATABASE_PATH = "database/MajorTom.db";

const db = new loki(DATABASE_PATH, {autoload: true});

let homeDb = null;

module.exports = {
    initDatabase: () => {
        return new Promise((fullfill, reject) => {
            db.loadDatabase({}, () => {
                homeDb = db.getCollection(COLLECTION_NAME);
                if (!homeDb) {
                    console.log("Creation collection : ", COLLECTION_NAME);
                    homeDb = db.addCollection(COLLECTION_NAME);
                    db.saveDatabase();
                    fullfill(homeDb);
                }else {
                    fullfill(homeDb);
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