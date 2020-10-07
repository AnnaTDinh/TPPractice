/*
Given a string, determine if it is a palindrome, considering only alphanumeric 
characters and ignoring cases.
Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false

let example1 = isPalindrome(); // 
let example2 = isPalindrome(); // 
let example3 = isPalindrome(); // 
let example4 = isPalindrome(); // 
let example5 = isPalindrome(); // 
console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
*/
var isPalindrome = function(s) {
  if (s.length === 0) {
    return true;
  }
  let regex = /[a-z0-9]/;
  s = s.toLowerCase();
  let first = 0;
  let last = s.length - 1;
  while (first < last) {
    if (!regex.test(s[first])) {
      first++;
    } else if (!regex.test(s[last])) {
      last--;
    } else if (s[first] === s[last]) {
      first++;
      last--;
    } else {
      return false;
    }
  }
  return true;
};


let example1 = isPalindrome("raceacar"); // false
let example2 = isPalindrome("Hannah"); // true
let example3 = isPalindrome("Hello World"); // false
let example4 = isPalindrome("A man, a plan, a canal: Panama"); // true
let example5 = isPalindrome("racecar"); // true
console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);