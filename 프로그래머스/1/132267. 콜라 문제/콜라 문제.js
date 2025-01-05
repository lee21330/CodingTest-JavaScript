function solution(a, b, n) {
    var answer = 0; 
  
    while(a <= n){
        var coke = Math.floor(n/a) * b ; // 새로 받은 병 수
        n = (n % a) + coke;  // 남은 병 수
        answer += coke; 
    }

    return answer;
}