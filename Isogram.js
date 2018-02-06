// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  if (str === "") {
    return true
  }

  const strLower = str.toLowerCase()

  for (let i = 0; i < strLower.length; i++) {
    const checkChar = strLower[i]
    const newStr = strLower.slice(i + 1)
    if (newStr.includes(checkChar) === true) {
      return false
    }
  }

  return true
}
