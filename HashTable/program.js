'use strict';

const hash = require('./HashTable');

let hashTable = new hash.HashTable(10);
hashTable.insert('kjds', 'kjds@google.com');
hashTable.insert('kdjs', 'kdjs@facebook.com');
hashTable.insert('kjds', 'kjds@facebook.com');
//console.log(hashTable.hash(5));
console.log(hashTable.get(5));
console.log(hashTable.get('kdjs'));
console.log(hashTable.retriveAll());
console.log(JSON.stringify(hashTable));