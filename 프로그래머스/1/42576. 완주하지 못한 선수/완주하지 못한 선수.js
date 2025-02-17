function solution(participant, completion) {
    var answer = '';
    // 두 배열 모두 정렬
    participant.sort();
    completion.sort();
    
    for(let i = 0; i < participant.length; i++){
        // 완주한 선수 명단과 비교하여 다른 이름 나오며 해당 참가자가 완주하지 못한 선수
        if(participant[i] != completion[i]){
            answer = participant[i];
            break;
        } 
    }
    return answer;
}