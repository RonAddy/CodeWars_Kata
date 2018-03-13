function findOdd(A) {
    let intCount = new Map();
    let ans;
    
    A.forEach( element => {
      if(intCount.has(element)) {
        intCount.set(element, intCount.get(element)+1)
      }
      else {
        intCount.set(element, 1)
      }
    });
    
    intCount.forEach( (value,key) =>  value%2 !== 0 ? ans = key : null);
    return ans;
  }