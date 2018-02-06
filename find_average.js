// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  const avg = array.reduce((last, next, index) => (last + next))
  return avg/array.length
}

find_average([1, 1, 1])
