function solution(people, limit) {
    // solution01
//     // 무인도에 갇힌 사람이 1명일 경우 1 반환
//     if(people.length === 1) return 1;
    
//     var answer = 0; // 필요한 구명보트 개수
//     people.sort((a,b)=>a-b); // 사람들의 몸무게 오름차순 정렬
    
//     // 사람이 남아있을 동안 반복
//     while(people.length != 0){
//         if(people.length === 1){ // 1명 남았을 경우 1 추가 후 종료
//             answer++;
//             people.pop();
//         }else{
//             // 가장 가벼운 사람과 무거운 사람의 합이 limit 이하인 경우
//             if(people[0]+people[people.length-1] <= limit){
//                 answer++;
//                 people.pop(); // 가장 무거운 사람 제거
//                 people.shift(); // 가장 가벼운 사람 제거
//             // 아닌 경우
//             }else{
//                 answer++;
//                 people.pop(); // 가장 무거운 사람만 제거
//             }
//         }
//     }
    // solution02
    people.sort((a,b)=>a-b); // 사람들의 몸무게 오름차순 정렬
    var light = 0; // 가장 가벼운 사람 인덱스
    var heavy = people.length - 1; // 가장 무거운 사람 인덱스
    var answer = 0; // 필요한 구명보트 개수
    
    while(light <= heavy){
        if(people[light]+people[heavy] <= limit){ // 두 사람을 같이 태울 수 있으면
            light++ // 가장 가벼운 사람 제거
        }
        heavy--; // 가장 무거운 사람은 항상 제거
        answer++;
    }
    return answer; // 필요한 구명보트 개수
}