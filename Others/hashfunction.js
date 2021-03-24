// // Hash function
// // max is the # of buckets we are using in our hash table to store values
// var hashFunc = (string, max) => {
//     // Initialize the hash variable and set it to 0
//     var hash = 0;
//     // iterate through every letter in the string
//     for(var i = 0; i < string.length; i++) {
//         // Add sum of letters to the hash variable
//         hash += string.charCodeAt(i);
//     }
//     // Find the remainder. if the max = 5, we will have 0, 1, 2, 3, 4 buckets where we place the hash.
//     return hash
// };

// console.log(hashFunc('Dad'));
