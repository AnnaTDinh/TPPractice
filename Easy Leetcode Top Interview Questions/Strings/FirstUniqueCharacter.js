/*
Given a string, find the first non-repeating character in it and return its index. 
If it doesn't exist, return -1.

Examples:
s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
*/

// edge case
// case sensitive

var firstUniqChar = function(s) {
  let storage = {};
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (storage[s[i]] === undefined) {
      storage[s[i]] = i;
    } else {
      storage[s[i]] = -1;
    }
  }
  for (key in storage) {
    if (storage[key] !== -1) {
      return storage[key];
    }
  }
    // create storage object with a key will be the letter and value will be its index
    // iterate over the string
    // for each element,
      // add the element to the storage and add the count
    // iterate over storage
  return -1;
};

let example1 = firstUniqChar("leetcode"); // 0
let example2 = firstUniqChar("loveleetcode"); // 2
let example3 = firstUniqChar("Hannah"); // -1
console.log(example1);
console.log(example2);
console.log(example3);