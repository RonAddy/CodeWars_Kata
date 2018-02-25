function solution(string) {
    string.replace(/[A-Z]/, (char) => {
      console.log(string.indexOf(char))
      console.log(string)
      return string.slice(char, ` ${char}`)
    }) 

    console.log(string)
  }

  
console.log(solution('camelCasing'))