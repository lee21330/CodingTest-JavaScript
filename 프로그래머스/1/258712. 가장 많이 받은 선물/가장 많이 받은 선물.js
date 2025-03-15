function solution(friends, gifts) {
    var givenGifts = new Map(); // 친구들에게 준 총 선물 개수
    var givenCounts = new Map(); // 특정 친구 간의 선물 교환 횟수
    var receivedGifts = new Map(); // 받은 총 선물 개수
    var giftScore = new Map(); // 선물 지수 
    var nextMonth = new Map(friends.map(friend=>[friend,0])); // 다음달에 받을 선물 개수
    
    // 주고받은 선물 기록
    gifts.forEach(list=>{
        const [giver, receiver] = list.split(' ');
        // 준 총 선물 개수 증가
        givenGifts.set(giver,(givenGifts.get(giver) || 0) + 1); 
        // 받은 총 선물 개수 증가
        receivedGifts.set(receiver,(receivedGifts.get(receiver) || 0) + 1); 
        // 친구 간 선물 교환 횟수 기록
        givenCounts.set(list,(givenCounts.get(list) || 0) + 1);
    });
    
    // 선물 지수 구하기
    friends.forEach((name)=>{
        const given = givenGifts.get(name) || 0;
        const received = receivedGifts.get(name) || 0;
        giftScore.set(name, given-received); // 준 선물 - 받은 선물
    });
    
    // 다음 달에 받을 선물의 수 구하기
    for(let i = 0; i < friends.length; i++){
        for(let j = i+1; j < friends.length; j++){
            let friendA = friends[i]; 
            let friendB = friends[j];
            
            // 두 사람의 선물교환 횟수 구하기
            const friendACount = givenCounts.get(`${friendA} ${friendB}`) || 0; // friendA가 준 횟수
            const friendBCount = givenCounts.get(`${friendB} ${friendA}`) || 0; // friendB가 준 횟수
            
            if(friendACount > friendBCount) { // A가 준 선물 개수가 더 많을 때
                nextMonth.set(friendA, nextMonth.get(friendA) + 1); 
            }else if(friendACount < friendBCount){ // B가 준 선물 개수가 더 많을 때
                nextMonth.set(friendB, nextMonth.get(friendB) + 1);
            }else{ //주고받은 기록이 없거나, 주고받은 횟수가 같을 때
                if (giftScore.get(friendA) > giftScore.get(friendB)) { // A가 선물 지수가 더 높은 경우
                    nextMonth.set(friendA, nextMonth.get(friendA) + 1); 
                }else if(giftScore.get(friendA) < giftScore.get(friendB)){ // B가 선물 지수가 더 높은 경우
                    nextMonth.set(friendB, nextMonth.get(friendB) + 1);
                }
            }
        }
    }
    
    // 다음달에 가장 많은 선물을 받는 친구가 받을 선물의 수 반환
    return Math.max(...nextMonth.values());
}