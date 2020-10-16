/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:
Input: s = ""
Output: 0
 

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return "";
  }
  let last = false;
  let current = "";
  let longest = "";
  let i = 0;
  while (i < s.length) {
    current = s[i];
    for (let j = i + 1; j < s.length; j++) {
      let found = current.indexOf(s[j]) > -1;
      if (!found) {
        current += s[j];
      } else {
        break;
      }
      if (longest.length < current.length) {
        longest = current;
      }
    }
    i++;
  }
  return longest.length || current.length;
};
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("akkk")); // 2
console.log(lengthOfLongestSubstring("pas")); // 3
console.log(lengthOfLongestSubstring("paww")); // 6
console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring("bbbb")); // 1
