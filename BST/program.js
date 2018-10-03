'use strict';

const bst = require('./BST');

let myBst = new bst.BST();
let valueToSearch = 4;
myBst.Add(10);
myBst.Add(20);
myBst.Add(1);
myBst.Add(2);
myBst.Add(3);
myBst.Add(4);

console.log(`Does BST contains ${valueToSearch} : ${myBst.Contains(valueToSearch)}`);
console.log(`Does BST contains ${valueToSearch + 60} : ${myBst.Contains(valueToSearch + 60)}`);

let logValue = function(value) {
    console.log(value)
};
console.log(bst.BST.Order);
myBst.DeapthFirstTraversal(logValue, bst.BST.Order.InOrder);

console.log(JSON.stringify(myBst), undefined, '\n');