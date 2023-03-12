function telephoneCheck(str) {
  // Regular expression for US phone number validation
  var phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?[\d]{3}[-\s]?[\d]{4}$/;
  return phoneRegex.test(str);
}

var inputString = "11 555-555-5555";
if (telephoneCheck(inputString)) {
  console.log(inputString + " is a valid US phone number!");
} else {
  console.log(inputString + " is not a valid US phone number.");
}
