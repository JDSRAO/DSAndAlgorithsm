'use strict';

function LinkedList() {
    this.head = null;
    this.tail = null;
    this.count = 0;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.AddToHead = function (value) {
    if(!this.head) {
      this.head = new Node(value,null,null);
      this.tail = this.head;
      this.count++;
    }
    else {
        let newNode = new Node(value, this.head, null);
        this.head = newNode;
    }  
  };

LinkedList.prototype.Print = function () {
    let node = this.head;
    let output = '[ ';
    while(node != null) {
        output += node.value;
        node = node.next;
        if(node) {
            output += ' , ';
        }
    }
    output += ' ]';
    console.log(output);
};

LinkedList.prototype.AddToTail = function (value) {
    let newNode = new Node(value, null, this.tail);
    if(this.tail) {
        this.tail.next = newNode;
    }
    else {
        this.head = newNode;
    }
    this.tail = newNode;
};

LinkedList.prototype.RemoveHead = function () {
    if(!this.head) {
        return null;
    }
    else {
        let nodeToDelete = this.head;
        let value = nodeToDelete.value;
        let nextNode = this.head.next;
        this.head = nextNode;
        if(this.head) {
            this.head.prev = null;
        }
        else {
            this.tail = null;
        }
        return value;
    }
};

module.exports = 
{
    LinkedList : LinkedList,
    Node : Node
}