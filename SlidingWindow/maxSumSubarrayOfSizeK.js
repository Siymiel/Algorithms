// PROBLEM
// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

// SOLUTION
/**
 If you observe closely, you will realize that to calculate the sum of a contiguous subarray, we can utilize the sum of the previous subarray. For this, consider each subarray as a Sliding Window of size ‘k.’ To calculate the sum of the next subarray, we need to slide the window ahead by one element. So to slide the window forward and calculate the sum of the new position of the sliding window, we need to do two things:

1. Subtract the element going out of the sliding window, i.e., subtract the first element of the window.
2. Add the new element getting included in the sliding window, i.e., the element coming right after the end of the window.
This approach will save us from re-calculating the sum of the overlapping part of the sliding window. Here is what our algorithm will look like:
 */

// CODE
function max_sum_of_subarray_of_size_k(k, arr){
    let maxSum = 0,
        windowSum = 0,
        windowStart = 0;

        for(windowEnd = 0; windowEnd < arr.length; windowEnd++){
            // Add the next element
            windowSum += arr[windowEnd];
            // Slide the window, but first check if the window size of 'k' is attained
            if(windowEnd >= k - 1){
                maxSum = Math.max(maxSum, windowSum);
                // Subtract the element going out
                windowSum -= arr[windowStart];
                // Slide window ahead
                windowStart += 1;
            }
        }
        return maxSum;
}

console.log(`Maximum sum of subArray of size K: ${max_sum_of_subarray_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);  