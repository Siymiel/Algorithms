// QUESTION
// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both baskets.

// SOLUTION
// This problem follows the Sliding Window pattern and is quite similar to Longest Substring with K Distinct Characters. In this problem, we need to find the length of the longest subarray with no more than two distinct characters (or fruit types!). This transforms the current problem into Longest Substring with K Distinct Characters where K=2.

// CODE
function fruits_into_baskets(fruits) {
    let windowStart = 0,
      maxLength = 0,
      fruitFrequency = {};
  
    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
      const rightFruit = fruits[windowEnd];
      if (!(rightFruit in fruitFrequency)) {
        fruitFrequency[rightFruit] = 0;
      }
      fruitFrequency[rightFruit] += 1;
  
      // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
      while (Object.keys(fruitFrequency).length > 2) {
        const leftFruit = fruits[windowStart];
        fruitFrequency[leftFruit] -= 1;
        if (fruitFrequency[leftFruit] === 0) {
          delete fruitFrequency[leftFruit];
        }
        windowStart += 1; // shrink the window
      }
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
  
    return maxLength;
  }
  
  
  console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`);
  console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])}`);