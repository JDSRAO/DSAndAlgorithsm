'use strict';

function HashTable(size) {
    this.buckets = Array(size);
    this.count = this.buckets.length;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;

}

HashTable.prototype.hash = function (key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }
    let bucket = total % this.count;
    return bucket;
};

HashTable.prototype.retriveAll = function () {
    let result = [];
    let count = 0;
    for (let i = 0; i < this.buckets.length; i++) {
        let currentNode = this.buckets[i];
        while (currentNode) {
            result[count] = currentNode.value;
            count++;
            currentNode = currentNode.next;
        }
    }
    return result;

};

HashTable.prototype.insert = function (key, value) {
    let index = this.hash(key);
    if (!this.buckets[index]) {
        this.buckets[index] = new HashNode(key, value);
    }
    else {
        let currentnode = this.buckets[index];
        while (currentnode.next) {
            if (currentnode.key === key) {
                currentnode.value = value;
                return;
            }
            currentnode = currentnode.next;
        }
        if (currentnode.key === key) {
            currentnode.value = value;
        }
        else {
            currentnode.next = new HashNode(key, value);
        }

    }
};

HashTable.prototype.get = function (key) {
    let index = this.hash(key);
    if (!this.buckets[index]) {
        return null;
    }
    else {
        let node = this.buckets[index];
        while (node) {
            if (node.key === key) {
                return node.value;
            }
            node = node.next;
        }
        return null;
    }
};

module.exports =
    {
        HashTable: HashTable,
        HashNode: HashNode
    }