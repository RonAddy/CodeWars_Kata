// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


let uniqueInOrder=function(iterable){
    let ans =[]
    // initialize index accumulator
    let index = 0

    //If the next in the iterable does not equal the current one, push into answer array
    for( let x of iterable){
      iterable[index+1]  === x ? null : ans.push(x) 
      index++
   }
      return ans
  }
  
  uniqueInOrder('ABBCcAD')  