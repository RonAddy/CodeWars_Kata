// We need a function that can transform a string into a number.

var stringToNumber = function(str) {
  return parseInt(str)
}

// Test
// stringToNumber("1234") == 1234
// stringToNumber("605" ) == 605
// stringToNumber("1405") == 1405
// stringToNumber("-7"  ) == -7

// Research these below
// 1.
// var stringToNumber = function(str) {
//   return + str;
// }
//
// 2.
// var stringToNumber = function(str) {
//   return Number(str);
// }
