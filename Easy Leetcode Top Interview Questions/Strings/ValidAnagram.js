/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.
*/

var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  if (s.length === 0 || t.length === 0) {
    return true;
  }
  t = t.split("");
  for (let i = 0; i < s.length; i++) {
    let current = t.indexOf(s[i]);
    if (current > -1) {
      t.splice(current, 1);
    }
  }
  if (t.length === 0) {
    return true
  } else {
    return false
  }

};

let example1 = isAnagram("anagram", "nagaram"); // true
let example2 = isAnagram("hello", "elloh"); // true
let example3 = isAnagram("what", "cool"); // false
let example4 = isAnagram("hi", "hey"); // false
let example5 = isAnagram("", ""); // true
console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);