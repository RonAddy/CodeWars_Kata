// Given an array of one's and zero's convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1


const binaryArrayToNumber = arr => {
    // Converting array values into integers, following binary rule
    const binary = [
    (arr[3] * 1),
    (arr[2] * 2),
    (arr[1] * 4),
    (arr[0] * 8)
    ]
    return binary.reduce( (prev, next) => prev + next) 
  };

// Test
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15