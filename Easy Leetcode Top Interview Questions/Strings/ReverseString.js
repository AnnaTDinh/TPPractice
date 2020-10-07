/*
Write a function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by 
modifying the input array in-place with O(1) extra memory.
You may assume all the characters consist of printable ascii characters.

Example 1:
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/
var reverseString = function (s) {
  // create first variable that will be equal to 0
  // create last variable that will be equal to the last index of the array
  let first = 0;
  let last = s.length - 1;
  // while first is less than last
  while (first < last) {
    // swap the element at s[first] with s[last];
    swap(first, last, s);
    // increment first
    first++;
    // decrement last
    last--;
  }
  // return s, the array
  return s;
};

swap = (first, last, s) => {
  let temp = s[first];
  s[first] = s[last];
  s[last] = temp;
};

console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
