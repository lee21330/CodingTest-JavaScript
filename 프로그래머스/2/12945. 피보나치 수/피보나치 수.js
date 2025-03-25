function solution(n) {
    var a = 0, b = 1, fib = 0;
    for(let i = 2; i <= n; i++){
        fib = (a + b)%1234567; // 매 단계에서 % 연산 적용하여 큰 수 방지
        a = b;
        b = fib;
    }
    return fib;
}