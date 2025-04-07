function solution(people, limit) {
    // 무인도에 갇힌 사람이 1명일 경우 1 반환
    if(people.length === 1) return 1;
    
    // 2명 이상일 경우
    var answer = 0;
    people.sort((a,b)=>a-b);
    while(people.length != 0){
        if(people.length === 1){
            answer++;
            people.pop();
        }else{
            if(people[0]+people[people.length-1] <= limit){
                answer++;
                people.pop();
                people.shift();
            }else{
                answer++;
                people.pop();
            }
        }
    }

    return answer;
}