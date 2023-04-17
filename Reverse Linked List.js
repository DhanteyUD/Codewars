// Write a function that takes in the head of a Singly Linked List, reverses the list in place (i.e., doesn't create a brand new list),
// and returns its new head.

// Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None / null
// if it's the tail of the list.

// You can assume that the input Linked List will always have at least one node; in other words, the head will never be None / null.

// Sample Input
// head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 // the head node with value 0
// Sample Output
// 5 -> 4 -> 3 -> 2 -> 1 -> 0 // the new head node with value 5

function reverseLinkedList(head) {
  let reversed = null;
  while (head) {
    const tmp = head;
    head = head.next;
    tmp.next = reversed;
    reversed = tmp;
  }

  return reversed;
}

console.log(
  JSON.stringify(
    reverseLinkedList({
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: {
            data: 4,
            next: {
              data: 5,
              next: {
                data: 6,
                next: {
                  data: 7,
                },
              },
            },
          },
        },
      },
    })
  )
);

module.exports = reverseLinkedList();
