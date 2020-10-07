/*
Given an array nums, write a function to move all 0's to the end of it while 
maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

var moveZeroes = function(nums) {
  // create variable i that is equal to the length of nums array
  let i = nums.length - 1;
  // while i is greater than or equal to 0
  while (i >= 0) {
    // if the current element is 0
      // remove the current element from the nums array
      // and push 0 to nums array
      // decrement i by 1
    // else
      // decrement i by 1
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
    } else {
      i--;
    }
  }
  // return nums array;
  return nums;
};

console.log(moveZeroes([0,1,0,3,12])); //[1,3,12,0,0]