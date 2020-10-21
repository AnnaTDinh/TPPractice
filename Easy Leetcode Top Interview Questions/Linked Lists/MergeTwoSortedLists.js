/*
Merge two sorted linked lists and return it as a new sorted list. 
The new list should be made by splicing together the nodes of the first two lists.

Example 1:
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: l1 = [], l2 = []
Output: []

Example 3:
Input: l1 = [], l2 = [0]
Output: [0]
 
Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
*/

var mergeTwoLists = function(l1, l2) {
  let newList = [];
  let newListLength = l1.length + l2.length;
  // everytime we add an element to newList, it increases newList's length by 1
  // when newList's length is equal to the length of l1 + l2, the loop stops
  while (newList.length !== newListLength) {
    // if l1 is empty and l2 is not,
      // add l2's first element to newList
      // remove the first element from l2
    if (l1.length === 0 && l2.length > 0) {
      newList.push(l2[0]);
      l2.splice(0,1);
      // if l2 is empty and l1 is not,
      // add l1's first element to newList
      // remove the first element from l1
    } else if (l2.length === 0 && l1.length > 0) {
      newList.push(l1[0]);
      l1.splice(0,1);
    } else {
      // if l1 and l2 has elements in their list
      // if l1's first element is greater than l2's first element
        // add l2's first element to newList
        // remove l2's first element
      if (l1[0] > l2[0]) {
        newList.push(l2[0]);
        l2.splice(0,1);
      } else {
        // else
        // add l1's first element to newList
        // remove l1's first element
        newList.push(l1[0]);
        l1.splice(0,1);
      }
    }
  }
  // return newList
  return newList;
};

console.log(mergeTwoLists([1, 2, 4], [1, 2, 3]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));
console.log(mergeTwoLists([0], []));