'use strict';

function BST() {
    this.root = null;
}

BST.Order = {'PreOrder' : 1, 'PostOrder' : 2, 'InOrder'  : 3};

function Node(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
}

BST.prototype.Add = function (value) {
    if(!this.root) {
        this.root = new Node(value, null, null);
    }
    else {
        AddNode(value, this.root);
    }
};

BST.prototype.Contains = function (value) {
    if(!this.root) {
        return false;
    }
    else {
       return contains(value, this.root);
    }
};

/*
Depth first traversal with configuranle order algorithm (InOrder, PreOrder, PostOrder)
*/

BST.prototype.DeapthFirstTraversal = function (fn, order) {
    if(typeof fn === 'function') {
        deapthFirstTraversal(this.root, fn, order);
    }
    else {
        throw `${fn} is not a function`;
    }
};

let deapthFirstTraversal = function(node, userFunction, order) {
    if(order === BST.Order.PreOrder ) {
        userFunction(node.value);
    }
    if(node.left) {
        deapthFirstTraversal(node.left, userFunction, order);
    }
    if(order === BST.Order.InOrder) {
        userFunction(node.value);
    }
    if(node.right) {
        deapthFirstTraversal(node.right, userFunction, order);
    }
    if(order === BST.Order.PostOrder) {
        userFunction(node.value);
    }
};

let contains = function (value, node) {
    if(value === node.value) {
        return true;
    }
    else if(value < node.value) {
        if(node.left) {
            return contains(value, node.left);
        }
        else {
            return false;
        }
    }
    else if(value > node.value) {
        if(node.right) {
            return contains(value, node.right);
        }
        else {
            return false;
        }
    }
};

let AddNode = function (value, node) {
    if(value <= node.value) {
        if(!node.left) {
            node.left = new Node(value, null, null);
        }
        else {
            AddNode(value, node.left);
        }
    }
    else {
        if(!node.right) {
            node.right = new Node(value, null, null);
        }
        else {
            AddNode(value, node.right);
        }
    }
};


module.exports = 
{
    BST : BST,
    Node : Node
}

