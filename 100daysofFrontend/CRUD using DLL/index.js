class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    // Create: Add a new node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
    }

    // Read: Print the elements of the list
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Update: Update the data of a node at a specific position
    update(position, newData) {
        let current = this.head;
        for (let i = 1; i < position && current; i++) {
            current = current.next;
        }

        if (!current) {
            console.log("Invalid position");
            return;
        }

        current.data = newData;
    }

    // Delete: Remove a node at a specific position
    removeAt(position) {
        let current = this.head;

        for (let i = 1; i < position && current; i++) {
            current = current.next;
        }

        if (!current) {
            console.log("Invalid position");
            return;
        }

        if (current.prev) {
            current.prev.next = current.next;
        } else {
            this.head = current.next;
        }

        if (current.next) {
            current.next.prev = current.prev;
        }
    }
}

// Example Usage:
const doublyList = new DoublyLinkedList();

doublyList.append(1);
doublyList.append(2);
doublyList.append(3);

console.log("Original List:");
doublyList.display();

doublyList.update(2, 10);
console.log("\nList after updating at position 2:");
doublyList.display();

doublyList.removeAt(2);
console.log("\nList after removing at position 2:");
doublyList.display();
