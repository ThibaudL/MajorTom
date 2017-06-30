var loki = require('lokijs')

var db = new loki('database/MajorTom.db');

// Add a collection to the database
var test = db.addCollection('test');

db.removeCollection('test');

// Add some documents to the collection
test.insert({ name : 'mjolnir', owner: 'thor', maker: 'dwarves' });
test.insert({ name : 'gungnir', owner: 'odin', maker: 'elves' });
test.insert({ name : 'tyrfing', owner: 'Svafrlami', maker: 'dwarves' });
test.insert({ name : 'draupnir', owner: 'odin', maker: 'elves' });

// Find and update an existing document
var tyrfing = test.findOne({'name': 'tyrfing'});
console.log(tyrfing);
tyrfing.owner = 'arngrim';
test.update(tyrfing);

db.saveDatabase();

console.log("Hello WOrlddd");