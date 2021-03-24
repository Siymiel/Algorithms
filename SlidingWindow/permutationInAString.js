// PROBLEM
// Given a string and a pattern, find out if the string contains any permutation of the pattern.

// SOLUTION
/**
 This problem follows the Sliding Window pattern, and we can use a similar sliding window strategy as discussed in Longest Substring with K Distinct Characters. We can use a HashMap to remember the frequencies of all characters in the given pattern. Our goal will be to match all the characters from this HashMap with a sliding window in the given string. Here are the steps of our algorithm:

1. Create a HashMap to calculate the frequencies of all characters in the pattern.
2. Iterate through the string, adding one character at a time in the sliding window.
3. If the character being added matches a character in the HashMap, decrement its frequency in the map. If the character frequency becomes zero, we got a complete match.
4. If at any time, the number of characters matched is equal to the number of distinct characters in the pattern (i.e., total characters in the HashMap), we have gotten our required permutation.
5. If the window size is greater than the length of the pattern, shrink the window to make it equal to the pattern’s size. At the same time, if the character going out was part of the pattern, put it back in the frequency HashMap.
 */

// CODE
// Here is what our algorithm will look like:
function find_permutation(str, pattern) {
    let windowStart = 0,
      matched = 0,
      charFrequency = {};
  
    for (i = 0; i < pattern.length; i++) {
      const chr = pattern[i];
      if (!(chr in charFrequency)) {
        charFrequency[chr] = 0;
      }
      charFrequency[chr] += 1;
    }
  
    // Our goal is to match all the characters from the 'charFrequency' with the current window
    // try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      if (rightChar in charFrequency) {
        // Decrement the frequency of matched character
        charFrequency[rightChar] -= 1;
        if (charFrequency[rightChar] === 0) {
          matched += 1;
        }
      }
  
      if (matched === Object.keys(charFrequency).length) {
        return true;
      }
  
      // Shrink the sliding window
      if (windowEnd >= pattern.length - 1) {
        leftChar = str[windowStart];
        windowStart += 1;
        if (leftChar in charFrequency) {
          if (charFrequency[leftChar] === 0) {
            matched -= 1;
          }
          charFrequency[leftChar] += 1;
        }
      }
    }
    return false;
  }
  
  
  console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`);
  console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`);
  console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`);
  console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`);