'use strict';

function BST() {
    this.root = null;
}

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

