function rot13(str) {
  var cipheredString = "";
  for (var i = 0; i < str.length; i++) {
    var currentCharCode = str.charCodeAt(i);
    if (currentCharCode >= 65 && currentCharCode <= 90) {
      cipheredString += String.fromCharCode((currentCharCode - 65 + 13) % 26 + 65);
    } else if (currentCharCode >= 97 && currentCharCode <= 122) {
      cipheredString += String.fromCharCode((currentCharCode - 97 + 13) % 26 + 97);
    } else {
      cipheredString += str[i];
    }
  }
  return cipheredString;
}

var inputString = "SERR PBQR PNZC";
var cipheredString = rot13(inputString);
console.log(inputString + " converted to a Caesar's Cipher is: " + cipheredString);
