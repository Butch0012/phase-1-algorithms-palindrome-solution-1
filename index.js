function isPalindrome(word) {
  // Write your algorithm here
  //divides the word to two and rounds off
var check= Math.floor(word.length/2)
//for loop to check the number does not surpass the half of the words
for(i=0;i<check;i++)
{//if statement accessing && comparing the array
  if(word[i]===word[word.length-1])
  return true;
else return false;
}

}

/* 
  Add your pseudocode here  MINE
  function isPalindrome(word)
    const reverseWord===reverse(word)
      if(word===reverseWord)
      return true;
    else return false;
 
    COPIED
    function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}
*/

/*
  Add written explanation of your solution here

  1 The code divides the word to two
  2 rounds off to the least whole number
  3 the for loop is for iteration 
  4 checks if check is less than  step 2
  5 if statement is used for condition statement 
  6 ensures the comparison of the code

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
