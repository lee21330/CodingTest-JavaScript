function solution(t, p) {
    var answer = 0;
    for(let i = 0; i < t.length; i++){
        if(t.slice(i,i+p.length).length === p.length && parseInt(t.slice(i,i+p.length)) <= parseInt(p)){
            answer++;
        }
    }
    return answer;
}