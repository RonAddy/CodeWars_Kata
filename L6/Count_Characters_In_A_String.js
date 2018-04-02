// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

// For C#: Use a Dictionary<char, int> for this kata!


function count (string) {  
    let ans = {a: 0}
    string = string.split("").
    forEach( ele => Object.keys(ans).includes(ele) ? ans[`${ele}`]+= 1 : ans[`${ele}`] = 1)
     return ans;
  }

console.log(count("aba"))
