/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/


var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
     nums.unshift(nums.pop());
 }
  return nums;
 // for k times,
   // remove the last element and add to front
};

let example1 = rotate([1,2,3,4,5,6,7], 3); //[5,6,7,1,2,3,4]
console.log(example1);

let example2 = rotate([-1,-100,3,99], 2); //[3,99,-1,-100]
console.log(example2);
