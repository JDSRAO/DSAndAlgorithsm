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
    }
    else {
        let newNode = new Node(value, this.head, null);
        this.head = newNode;
    }  
    this.count++;
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
    this.count++;
    this.tail = newNode;
};

LinkedList.prototype.RemoveHead = function () {
    if(!this.head) {
        return null;
    }
    else {
        this.count--;
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

LinkedList.prototype.RemoveTail = function () {
    if(!this.tail) {
        return null;
    }
    else {
        this.count--;
        let value = this.tail.value;
        let prevNode = this.tail.prev;
        this.tail = prevNode;
        if(this.tail) {
            this.tail.next = null;
        }
        else {
            this.head = null;
        }
        return value;
    }
};

LinkedList.prototype.Search = function (value) {
    let node = this.head;
    while(node) {
        if(value === node.value) {
            return true;
        }
        node = node.next;
    }
    return false;
};

LinkedList.prototype.indexOf = function (value) {
    let node = this.head;
    let index = 0;
    while (node) {
        if(node.value === value) {
            return index;
        }
        index++;
        node = node.next;
    }
    return -1;
};

module.exports = 
{
    LinkedList : LinkedList,
    Node : Node
}