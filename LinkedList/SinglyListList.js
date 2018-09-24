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

module.exports = 
{
    LinkedList : LinkedList,
    Node : Node
}