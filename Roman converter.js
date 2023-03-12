function convertToRoman(num) {
  var romanNumeral = "";
  var romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
  for (var i = 0; i < romanValues.length; i++) {
    while (num >= romanValues[i]) {
      romanNumeral += romanSymbols[i];
      num -= romanValues[i];
    }
  }
  
  return romanNumeral;
}

var inputNumber = 123;
var romanNumeral = convertToRoman(inputNumber);
console.log(inputNumber + " converted to a Roman numeral is: " + romanNumeral);

