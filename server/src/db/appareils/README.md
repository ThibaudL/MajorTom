usage :

``` javascript
const pieceDb = require("./db/piece/pieceDb").getPieceDb();

// Add some documents to the collection
pieceDb.insert({ name : 'mjolnir', owner: 'thor', maker: 'dwarves' });
pieceDb.insert({ name : 'gungnir', owner: 'odin', maker: 'elves' });
pieceDb.insert({ name : 'tyrfing', owner: 'Svafrlami', maker: 'dwarves' });
pieceDb.insert({ name : 'draupnir', owner: 'odin', maker: 'elves' });

// Find and update an existing document
var tyrfing = pieceDb.findOne({'name': 'tyrfing'});
console.log(tyrfing);
tyrfing.owner = 'arngrim';
pieceDb.update(tyrfing);
```