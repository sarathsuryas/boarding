class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}
// Create a singly linked list:
// 12 -> 11 -> 12 -> 21 -> 41 -> 43 -> 21
let head = new Node(12);
head.next = new Node(11);
head.next.next = new Node(12);
head.next.next.next = new Node(21);
head.next.next.next.next = new Node(41);
head.next.next.next.next.next = new Node(43);
head.next.next.next.next.next.next = new Node(21);


function removeDuplicates(head) {
    let curr = head
    while (curr) {
        let runner = curr
        while (runner.next) {
            if(curr.data === runner.next.data) {
                runner.next = runner.next.next
            }else runner = runner.next
        }
        curr = curr.next
    }
    return head
}

head = removeDuplicates(head)
let curr = head
while (curr) {
    console.log(curr.data)
    curr = curr.next
}

// efficient method using hashset