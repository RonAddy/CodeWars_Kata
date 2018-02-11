function findOdd(A) {
  class intObject {
    constructor(value, count) {
      this.value = value,
      this.count = 1
    }
  }

  const newArr = []
  var ans = 0

  A.forEach((int, index, array) => {
    console.log(index)
    if (newArr[0] === undefined) {
      newArr.push(new intObject(int))
    } else if (newArr.forEach( int => int.value) === int) {
      newArr.find( element => {element.value === int; console.log(element)})
    } else {
      newArr.push(new intObject(int))
    }
  })

  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i].count > ans) {
      ans = newArr[i].value
    }
  }

  console.log(newArr)
  console.log(ans)
  return ans
}

// class intObject {
//   constructor(value, count) {
//     this.value = value,
//     this.count = 1
//   }
// }
//
// var test = new intObject (4, 1)
// const newArr = []
// newArr.push(test)
// console.log(test.value)

findOdd([
  20,
  1,
  -1,
  2,
  -2,
  3,
  3,
  5,
  5,
  1,
  2,
  4,
  20,
  4,
  -1,
  -2,
  5
])
