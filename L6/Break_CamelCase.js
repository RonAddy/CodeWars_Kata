// Complete the solution so that the function will break up camel casing, using a space between words.


function solution(string) {
    // let newStr = string.split('').map( char => {
    //     if (char === char.toUpperCase()) {
    //         char = ` ${char}` 
    //     }
    //     return char
    // })
    // return newStr.join('')
    return string.replace(/[A-Z]/g, " $&")
}
  
// Test
console.log(solution('camelCasingRules'))