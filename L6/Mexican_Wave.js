function wave(input){
    let ans = [].map.call(input, (x, i) => {
    let index = i
    if(i = 0) return bigX + input.substr(i+1)
    
    input = input.toLowerCase()
    return input.substr(0, index) + x.toUpperCase()+ input.substr(index+1)
    })
    // if (!ans.forEach( x => match(/[A-Z/))
    return ans
  }
  