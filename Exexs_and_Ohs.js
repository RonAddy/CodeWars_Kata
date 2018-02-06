// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


function XO (str) {
  let newStr = str.toLowerCase()
  if (newStr.includes('x') === false && newStr.includes('o') === false) {
    return true
  }

  let xCounter = 0
  let oCounter = 0
  const arr = newStr.split('')

  arr.forEach(char => {
    if (char === 'x') {
      xCounter++
    } else if (char === 'o') {
      oCounter++
    }
  })

  if (xCounter === oCounter) {
    return true
  } else {
    return false
  }
}


// TEST
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
