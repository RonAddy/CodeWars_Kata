// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples:

// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("

function duplicateEncode(word){
    // turn string into array for iteration
    let result = word.toLowerCase().split("")

    // check for duplicates with index matching and change characters
    return result.map( character => result.lastIndexOf(character) !== result.indexOf(character) ? ")" : "(").join("")
}

// Test
// console.log(duplicateEncode("din"));
// console.log(duplicateEncode("recede"));
// console.log(duplicateEncode("Supralapsarian"));