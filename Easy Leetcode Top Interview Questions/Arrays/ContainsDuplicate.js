/*
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the 
array, and it should return false if every element is distinct.

Example 1:
Input: [1,2,3,1]
Output: true

Example 2:
Input: [1,2,3,4]
Output: false

Example 3:
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

// create a variable, storage, an object, that will keep count of the number of times an integer is dealt with
// iterate through the nums array
  // if storage contains that number,
    // return true
  // else
    // set the storage's key for the element to be 1
// return false

var containsDuplicate = function(nums) {
  let storage = {};
  for (let i = 0; i < nums.length; i++) {
      if (storage[nums[i]]) {
          return true;
      } else {
          storage[nums[i]] = 1;
      }
  }
  return false;
};

let example1 = containsDuplicate([1,2,3,1]); // true
console.log(example1);

let example2 = containsDuplicate([1,2,3,4]); // false 
console.log(example2);

let example3 = containsDuplicate([1,1,1,3,3,4,3,2,4,2]); // true
console.log(example3);