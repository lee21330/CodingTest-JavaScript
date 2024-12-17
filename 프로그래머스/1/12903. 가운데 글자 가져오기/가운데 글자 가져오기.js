function solution(s) {
    let num = Math.floor(s.length/2)
    return answer = s.length%2===0?s[num-1]+s[num]:s[num];
}