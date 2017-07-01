const loki = require('lokijs');

const COLLECTION_NAME = 'scenarios';
const DATABASE_PATH = "database/MajorTom.db";

const db = new loki(DATABASE_PATH, {autoload: true});

let scenariosDb = null;

module.exports = {
    initDatabase: () => {
        return new Promise((fullfill, reject) => {
            db.loadDatabase({}, () => {
                scenariosDb = db.getCollection(COLLECTION_NAME);
                if (!scenariosDb) {
                    console.log("Creation collection : ", COLLECTION_NAME);
                    scenariosDb = db.addCollection(COLLECTION_NAME);
                    db.saveDatabase();
                    fullfill(scenariosDb);
                }else {
                    fullfill(scenariosDb);
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