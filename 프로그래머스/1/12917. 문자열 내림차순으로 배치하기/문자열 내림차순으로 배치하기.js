function solution(s) {
    var arr = s.split('').sort().reverse();
    var answer = '';
    for(let i=0;i<arr.length;i++){
        answer += arr[i];
    }
    return answer;
}