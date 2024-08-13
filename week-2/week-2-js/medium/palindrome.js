/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let cleanedStr = ''
  for (let char of str.toLowerCase()) {
    if(char >= 'a' && char <= 'z') cleanedStr +=char
  }
  const reversedString = cleanedStr.split('').reverse().join('')
  return cleanedStr === reversedString;
}


module.exports = isPalindrome;
