const db = require('../db').getDb();

const COLLECTION_NAME = 'piece';
// Add a collection to the database
const pieceDb = db.addCollection(COLLECTION_NAME);
module.exports = {
    getPieceDb: function () {
        return pieceDb;
    },
    getCollectionName : function(){
        return COLLECTION_NAME;
    }
};