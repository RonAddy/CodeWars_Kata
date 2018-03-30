function solution(n){
    let benchmark = Math.floor(n) + .5
    let condition = n - benchmark
    let ans;
    console.log(condition);
    condition == 0.25 ? ans = benchmark : condition < -0.25 ? ans = Math.ceil(n) : ans = Math.floor(n) 
     n === benchmark ? ans = n : null
    return ans 
  }

//   solution(4.75)
console.log(solution(4.3));
//   solution(4.5)
//   solution(4.2)
