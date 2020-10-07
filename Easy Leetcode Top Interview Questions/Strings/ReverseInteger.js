/*
Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store 
integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, assume that your function returns 0 
when the reversed integer overflows.

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 320020
Output: 20023
*/

var reverse = function (x) {
  // get absolute value
  // stringify the number
  // split the string
  // reverse the string
  // join the string back together
  // multiply it with Math.sign() to convert the string to a number and to get the appropriate sign
  return Math.abs(x).toString().split('').reverse().join('') * Math.sign(x);

};

let example1 = reverse(123); //321
let example2 = reverse(-123); //-321
let example3 = reverse(120); //21
let example4 = reverse(320020); //20023
let example5 = reverse(0); //0
console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);