'use strict';

const bst = require('./BST');

let myBst = new bst.BST();
myBst.Add(1);
myBst.Add(2);
myBst.Add(1);

console.info(JSON.stringify(myBst));