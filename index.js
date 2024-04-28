function isPalindrome(word) {
  // Write your algorithm here
  var stringArr = word.split("");
  stringArr = stringArr.reverse();  
  var newWord = stringArr.join("");
  
  return word === newWord;

}

/* 
  Add your pseudocode here
  take string

  split into array
  reverse array
  join into string
  compare to original string
  return result


*/

/*
  Add written explanation of your solution here
  reverse the input string to compare
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
