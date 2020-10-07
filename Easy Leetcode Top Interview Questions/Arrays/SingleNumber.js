/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/

var singleNumber = function(nums) {
  return nums.reduce((acc, num) => acc ^ num);
    // accumulator ^ num (if there are duplicates, it will return as 0)
    // if it is single it will return as 1
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    // reduce(acccumulator, current num)
};

let example = singleNumber([4,1,2,1,2]); // 4
console.log(example);