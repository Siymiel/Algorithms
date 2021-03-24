// PROBLEM
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.


// SOLUTION
/**
 We can follow the Two Pointers approach. We will start with one pointer pointing to the beginning of the array and another pointing at the end. At every step, we will see if the numbers pointed by the two pointers add up to the target sum. If they do, we have found our pair; otherwise, we will do one of two things:

1. If the sum of the two numbers pointed by the two pointers is greater than the target sum, this means that we need a pair with a smaller sum. So, to try more pairs, we can decrement the end-pointer.
2. If the sum of the two numbers pointed by the two pointers is smaller than the target sum, this means that we need a pair with a larger sum. So, to try more pairs, we can increment the start-pointer.
 */

//CODE
function pair_with_target_sum(arr, targetSum) {
    let left = 0,
      right = arr.length - 1;
    while (left < right) {
      const currentSum = arr[left] + arr[right];
      if (currentSum === targetSum) {
        return [left, right];
      }
  
      if (targetSum > currentSum) {
        left += 1; // we need a pair with a bigger sum
      } else {
        right -= 1; // we need a pair with a smaller sum
      }
    }
    return [-1, -1];
  }
  
  
  console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
  console.log(pair_with_target_sum([2, 5, 9, 11], 11));

//   The time complexity of the above algorithm will be O(N), where ‘N’ is the total number of elements in the given array.


// AN ALTERNATIVE APPROACH //#
/**
 Instead of using a two-pointer or a binary search approach, we can utilize a HashTable to search for the required pair. We can iterate through the array one number at a time. Let’s say during our iteration we are at number ‘X’, so we need to find ‘Y’ such that “X + Y == TargetX+Y==Target”. We will do two things here:

1. Search for ‘Y’ (which is equivalent to “Target - XTarget−X”) in the HashTable. If it is there, we have found the required pair.
2. Otherwise, insert “X” in the HashTable, so that we can search it for the later numbers.
Here is what our algorithm will look like:
 */

// CODE
function pair_with_target_sum(arr, targetSum) {
    const nums = {}; // to store numbers and their indices
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (targetSum - num in nums) {
        return [nums[targetSum - num], i];
      }
      nums[arr[i]] = i;
    }
    return [-1, -1];
  }
  
  
  console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
  console.log(pair_with_target_sum([2, 5, 9, 11], 11));

//   The time complexity of the above algorithm will be O(N), where ‘N’ is the total number of elements in the given array.
