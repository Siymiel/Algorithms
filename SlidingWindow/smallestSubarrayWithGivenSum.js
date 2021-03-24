// QUESTION: find the length of the smallest contiguous/related subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

min_length_of_subarray_given_s = (s, arr) => {
    
  let windowSum = 0,
      windowStart = 0,
      minLength = Infinity;

  for(windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      // Add the next elem
      windowSum += arr[windowEnd];
      // Shrink the window size until the 'windowSum' is smaller than 's'
      while(windowSum >= s) {
          // find 'minLength'
          minLength = Math.min(minLength, windowEnd - windowStart + 1);
          // Subtract the outgoing elem
          windowSum -= arr[windowStart];
          // Add the incoming elem
          windowStart += 1;
          
      }
  }
  if(minLength === Infinity) {
      return 0;
  }
  return minLength;

}

console.log(`Smallest subarray length: ${length_of_the_smallest_subarray_given_s(7, [2, 1, 5, 2, 3, 2])}`);
console.log(`Smallest subarray length: ${length_of_the_smallest_subarray_given_s(7, [2, 1, 5, 2, 8])}`);
console.log(`Smallest subarray length: ${length_of_the_smallest_subarray_given_s(8, [3, 4, 1, 1, 6])}`);