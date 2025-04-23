// 최대공약수 구하는 함수
function getGCD(a,b){
    var result = 1;
    for(let i = Math.min(a,b); i>=1; i--){
        if(a%i===0 && b%i===0){
            result = i;
            break;
        }
    }
    return result;
}
// 최소공배수 구하는 함수
function getLCM(a,b){
    return (a * b) / getGCD(a,b);
}

// 배열 전체의 최소공배수 구하는 함수
function solution(arr) {
    return arr.reduce((acc,cur)=>getLCM(acc,cur)); 
}