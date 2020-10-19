/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

var reverseList = function (head) {
  let prev = null;
  let next = null;

  while (head !== null) {
    // next will be referencing head.next
    // reassign head.next to be previous
    next = head.next;
    head.next = prev;
    // reassign prev to our head value
    prev = head;
    // reassign head to be next
    head = next;
  }
  // return prev
  return prev;
};
