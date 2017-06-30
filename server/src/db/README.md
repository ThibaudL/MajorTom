usage :

``` javascript
const db = require('./db').getDb();
const PIECE_COLLECTION_NAME = require('./piece/pieceDb').getCollectionName();

const COLLECTION_NAME = 'TEST';
// Add a collection to the database
const pieceDb = db.addCollection(COLLECTION_NAME);
const pieceDb = db.removeCollection(PIECE_COLLECTION_NAME);
```