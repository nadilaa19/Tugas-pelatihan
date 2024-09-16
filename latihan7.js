// 1. Define the string
const text = 'gooaaaaal';

// 2. Create the regex pattern with quantifiers
const quantifierRegex = /go{2}a{4}l/;

// 3. Perform the test
const result = quantifierRegex.test(text);

// 4. Output the result
console.log(result);
