// 1. Define the string
const name = 'John Doe'; // Replace with your full name

// 2. Create the regex pattern to match all characters except vowels
const regex = /[^aeiou]/gi;

// 3. Get all non-vowel characters using .match()
const result = name.match(regex);

// 4. Output the result
console.log("Result:", result);

// 5. Join the array back into a string
const newName = result.join('');

// 6. Output the newName
console.log("New Name:", newName);

