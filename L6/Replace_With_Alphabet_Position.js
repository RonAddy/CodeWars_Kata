// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.
// a being 1, b being 2, etc.
// As an example:

// alphabet_position("The sunset sets at twelve o' clock.")

// Should return:
//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.


function alphabetPosition(text) {
    let answer = [];
    text = text.toUpperCase();
    for (let char of text) {
    // convert uppercase char of input text into unicode
      let code = text.charCodeAt(text.indexOf(char))
      //check unicode number against uppercase alphabet range
      //then push real alphabet number into result array 
      code > 65 && code < 91 ? ans.push(code - 64) : null
    }
    return answer.join(' ');
  }



//   alphabetPosition("Randomly generated tests:");
//   alphabetPosition("Tests for each letter: [a-z]");
//   alphabetPosition('abcdefghijklmnopqrstuvwxyz1234567890-=!@#$%^&*()_+[];,./\{}:|<>? ');