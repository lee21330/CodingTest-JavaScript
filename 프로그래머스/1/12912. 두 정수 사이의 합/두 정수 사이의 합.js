function solution(a, b) {
    var answer = 0;
    var x = a>b?b:a;
    var y = a>b?a:b;
    for(let i = x;i <= y;i++){
        answer += i;
    }
    return answer;
}