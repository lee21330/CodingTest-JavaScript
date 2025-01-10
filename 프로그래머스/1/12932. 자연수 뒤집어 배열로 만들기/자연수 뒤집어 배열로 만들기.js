function solution(n) {
    answer = n.toString().split('');
    for(let i = 0; i < answer.length; i++){
        answer[i] = Number(answer[i]);
    }
    return answer.reverse();
}