function solution(s1, s2) {
    var answer = 0;
    for(let i = 0; i < s2.length; i++){
        if(s1.includes(s2[i])) answer++;
    }
    return answer;
}