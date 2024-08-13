/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
        // Remove any non-alphabetic characters and convert to lowercase
        let cleanedStr1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
        let cleanedStr2 = str2.replace(/[^a-z]/gi, '').toLowerCase();
    
        // If the cleaned strings have different lengths, they can't be anagrams
        if (cleanedStr1.length !== cleanedStr2.length) {
            return false;
        }
    
        // Sort the characters in each string and compare them
        let sortedStr1 = cleanedStr1.split('').sort().join('');
        let sortedStr2 = cleanedStr2.split('').sort().join('');
    
        return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
