// 1. Define the recursive function balikKata
function balikKata(str) {
    // 2. Base case: if the string is empty, return an empty string
    if (str === "") {
      return "";
    } else {
      // 3. Recursive case: reverse the rest of the string and append the first character
      return balikKata(str.substr(1)) + str[0];
    }
  }
  
  // 4. Test the function with the string "Skilvul"
  console.log(balikKata("Skilvul"));
  