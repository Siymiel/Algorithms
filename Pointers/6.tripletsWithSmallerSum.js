// PROBLEM
// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

/**
 Example 1:

Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
 */

// SOLUTION
/**
 This problem follows the Two Pointers pattern and shares similarities with Triplet Sum to Zero. The only difference is that, in this problem, we need to find the triplets whose sum is less than the given target. To meet the condition i != j != k we need to make sure that each number is not used more than once.

Following a similar approach, first, we can sort the array and then iterate through it, taking one number at a time. Let’s say during our iteration we are at number ‘X’, so we need to find ‘Y’ and ‘Z’ such that X + Y + Z < targetX+Y+Z<target. At this stage, our problem translates into finding a pair whose sum is less than “target - Xtarget−X” (as from the above equation Y + Z == target - XY+Z==target−X). We can use a similar approach as discussed in Triplet Sum to Zero.
 */

// CODE
function triplet_with_smaller_sum(arr, target) {
    arr.sort((a, b) => a - b);
    let count = 0;
    for (i = 0; i < arr.length - 2; i++) {
      count += search_pair(arr, target - arr[i], i);
    }
    return count;
  }
  
  
  function search_pair(arr, target_sum, first) {
    let count = 0;
    let left = first + 1,
      right = arr.length - 1;
    while (left < right) {
      if (arr[left] + arr[right] < target_sum) { // found the triplet
        // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
        // left and right to get a sum less than the target sum
        count += right - left;
        left += 1;
      } else {
        right -= 1; // we need a pair with a smaller sum
      }
    }
    return count;
  }
  
  
  console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
  console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));

  /**
   Sorting the array will take O(N * logN). The searchPair() will take O(N). So, overall searchTriplets() will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2)

   The space complexity of the above algorithm will be O(N) which is required for sorting if we are not using an in-place sorting algorithm.
   */