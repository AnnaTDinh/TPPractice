/*
Write a function to find the longest common prefix string amongst an 
array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
Constraints:
0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    // if array length is 0, return empty string
    return "";
  }
  // longest equal to first word in array
  let longest = strs[0];
  // let i be the second word in the array
  let i = 1;
  while (i < strs.length) {
    let currentWord = strs[i];
    // if the current word is an empty string,
      // reassign longest to be an empty string
    if (currentWord.length === 0) {
      longest = "";
    } else {
    // else
      // loop through each word in the array
      for (let j = 0; j < currentWord.length; j++) {
        let currentLetter = currentWord[j];
        let nextLetter = currentWord[j + 1];
        // if the current letter is equal to the letter in longest and the next letter is undefined
          // slice from the start of the current word TO the current index
        if (!nextLetter && currentLetter === longest[j]) {
          longest = longest.slice(0, j + 1);
        }
        // if the current letter in the array is not equal to the letter in longest
        if (currentLetter !== longest[j]) {
          // reassign longest from the start of the word up to the current index
          longest = longest.slice(0, j);
          // break current loop
          break;
        }
      }
    }
    // for each word... iterate through each letter
    i++;
  }

  return longest;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["ab", "a"])); // "a"
console.log(longestCommonPrefix(["aba", "ab", ""])); // ""
