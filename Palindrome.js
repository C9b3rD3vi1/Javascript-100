function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  // Reverse the string
  var reversedStr = str.split('').reverse().join('');
  // Check if the original and reversed strings are equal
  return str === reversedStr;
}

var inputString = "A man, a plan, a canal: Panama";
if (isPalindrome(inputString)) {
  console.log(inputString + " is a palindrome!");
} else {
  console.log(inputString + " is not a palindrome.");
}
