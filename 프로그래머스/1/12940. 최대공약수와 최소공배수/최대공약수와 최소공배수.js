function solution(n, m) {
    var answer = [];
    var a = Math.min(n,m);
    var b = Math.max(n,m);
    var r = b % a;
    
    // 최대공약수 r이 0일때, a가 최대공약수 (유클리드 호제법)
    while(r != 0){
        b = a;
        a = r;
        r = b % a;
    }
    answer.push(a);
    
    // 최소공배수 = 두 수의 곱 / 최대공약수
    answer.push(n*m/a)
    return answer;
}