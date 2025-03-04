function solution(new_id) {
    // 1,2단계
    new_id = new_id.toLowerCase().match(/[a-z0-9._-]/g) || [];
    
    // 3단계
    var answer = [new_id[0]];
    for(let i = 1; i < new_id.length; i++){
        if(!(new_id[i-1] == '.' && new_id[i] == '.')){
            answer.push(new_id[i]);
        }
    }
    
    // 4단계
    if(answer[0] == '.') answer.shift();
    if(answer[answer.length-1] == '.') answer.pop();
    
    // 5단계
    if(answer.length == 0) answer.push('a');
    
    // 6단계
    if(answer.length >= 16){
        answer = answer.slice(0,15);
        if(answer[answer.length-1] == '.') answer.pop();
    }
    
    // 7단계
    while(answer.length < 3){
        answer.push(answer[answer.length-1]);
    }
    
    return answer.join('');
}