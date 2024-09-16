// 1. Define the string
let string = "saya belajar di skilvul.com";

// 2. Define the regex pattern for "skilvul.com"
let pattern = new RegExp("skilvul.com");

// 3. Use .exec() to search for the pattern in the string
let result = pattern.exec(string);

// 4. Use .test() to check if the pattern is present in the string
let status = pattern.test(string);

// Output the results
console.log("Result:", result); // Will show the array if found, or null if not found
console.log("Status:", status); // Will show true if found, false if not found
