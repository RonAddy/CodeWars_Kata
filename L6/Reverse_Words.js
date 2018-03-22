// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Any spaces in the string should be retained.

function reverseWords(str) {
    return ans = str.split(" ").map( ele => ele.split('').reverse().join('') ).join(" ")
  }

//   Test:
//   reverseWords("This is an example!"); 
//   returns  "sihT si na !elpmaxe"

//   reverseWords("double  spaces"); 
//   returns  "elbuod  secaps"
