// PROBLEM
// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

/**
 Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
 */

// SOLUTION
/**
 This is a straightforward question. The only trick is that we can have negative numbers in the input array, which will make it a bit difficult to generate the output array with squares in sorted order.

 A better approach could be to use two pointers starting at both ends of the input array. At any step, whichever pointer gives us the bigger square, we add it to the result array and move to the next/previous number according to the pointer.
 */

//  CODE
function make_squares(arr) {
    const n = arr.length;
    squares = Array(n).fill(0);
    let highestSquareIdx = n - 1;
    let left = 0,
      right = n - 1;
    while (left <= right) {
      let leftSquare = arr[left] * arr[left],
        rightSquare = arr[right] * arr[right];
      if (leftSquare > rightSquare) {
        squares[highestSquareIdx] = leftSquare;
        left += 1;
      } else {
        squares[highestSquareIdx] = rightSquare;
        right -= 1;
      }
      highestSquareIdx -= 1;
    }
  
    return squares;
  }
  
  
  console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
  console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);

  /**
   The above algorithm’s time complexity will be O(N) as we are iterating the input array only once.
   The above algorithm’s space complexity will also be O(N); this space will be used for the output array.
   */