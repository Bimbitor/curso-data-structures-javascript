

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        
        this.length = 1;
    }

    append(value) {
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        const newNode = new Node(value);

    }

    print(value) {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

}

let myLinkedList = new MySinglyLinkedList(1);


myLinkedList.append(2);

myLinkedList.append(3);

myLinkedList.append(4);

myLinkedList.prepend(0);

myLinkedList.print()

myLinkedList.append(2);

myLinkedList.append(3);

myLinkedList.append(4);

