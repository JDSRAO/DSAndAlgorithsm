'use strict';

const ll = require('./LinkedList');

let node1 = new ll.Node(1,null, null);

let ll1 = new ll.LinkedList();
ll1.AddToHead(1);
ll1.AddToHead(3);
ll1.AddToHead('4');
ll1.AddToTail(6);
ll1.AddToTail(100);
ll1.AddToHead(-100);
ll1.Print();
ll1.RemoveHead();
ll1.Print();

//console.log(ll1);