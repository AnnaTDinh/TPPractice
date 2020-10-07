/*
Given two arrays, write a function to compute their intersection.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
*/

var intersect = function(nums1, nums2) {
  // if either of the arrays' lengths are 0, return an empty array
  if (nums1.length === 0 || nums2.length === 0) {
      return [];
  }
  // create an array variable called result
  let result = [];
  // iterate over the first array, nums1
  for (let i = 0; i < nums1.length; i++) {
    // for each element..
    // iterate over the second array, nums2
    for (let j = 0; j < nums2.length; j++) {
      // if the current element in the first array is equal to the current element in the second array,
        // add that value to result array
        // remove the current element from nums2 array
        // break the loop
      if (nums1[i] === nums2[j]) {
        result.push(nums1[i]);
        nums2.splice(j, 1);
        break;
      }  
    }
  }
  // return the result array
  return result;
};

let example = intersect([1,2,2,1], [2,2]); // [2,2]
console.log(example);