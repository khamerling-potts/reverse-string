function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("expecting tunaep");
  console.log(reverseString("peanut"));

  console.log("expecting h");
  console.log(reverseString("h"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

/* 
Problem: given a string, write a function that returns a reversed copy of that string
create new string to hold reversed copy
loop through given string, starting at length-1 and going to 0
concat string[i] onto new string
return new string
*/
