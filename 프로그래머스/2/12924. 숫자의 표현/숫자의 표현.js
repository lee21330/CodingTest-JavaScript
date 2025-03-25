function solution(n) {
    // 연속된 자연수의 합으로 표현할 수 있는 경우의 수는 홀수 약수의 개수와 같다
    var answer = 0;
    for(let i = 1; i <= n; i++){
        if(n%i == 0 && i%2 != 0) answer++;
    }
    return answer;
}