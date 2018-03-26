// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

Math.round = function(number) {
    return 0; // TODO: fix this
  };
  
  Math.ceil = function(number) {
    return 0; // TODO: fix this
  };
  
  Math.floor = function(number) {
      let string = number.toString()
      return parseInt(string.replace(string[string.length-1], 0))
  };


// Math.round(0.4)
// 0
// Math.round(0.5)
// 1

// Math.ceil(0.4)
// 1
// Math.ceil(0.5)
// 1

// Math.floor(0.4) 
//0
// Math.floor(0.5)
//0