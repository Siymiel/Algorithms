//Define the stack
let letters = [];
// Define the word
let word = 'racecar';
// Define the reversed word
let rword = '';

// Put the 'word' elements in the 'letters' stack
for(let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// Reverse the elements in the 'word' which are contained in the 'letters' stack and place them in the 'rword'
for(let j = 0; j < word.length; j++) {
    rword += letters.pop();
}

// Check the conditions for a palindrome
if(rword === word) {
    console.log(`${word} is a palindrome`);
}else {
    console.log(`${word} is not a palindrome`);
}
