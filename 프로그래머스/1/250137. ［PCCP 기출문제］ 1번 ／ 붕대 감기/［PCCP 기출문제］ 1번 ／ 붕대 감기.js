function solution(bandage, health, attacks) {
    var answer = health; // 캐릭터의 체력
    const lastAttackTime = attacks[attacks.length-1][0]; // 마지막 공격 시간
    const AttackMap = new Map(attacks.map(([time,damage]) => [time,damage]));
    let continuousHealTime = 0; // 연속 붕대 감기 성공 시간
    
    for(let i = 1; i <= lastAttackTime; i++){
        if(AttackMap.has(i)){  // 몬스터의 공격이 있으면
            answer -= AttackMap.get(i); // 정해진 피해량만큼 체력 줄어듦
            continuousHealTime = 0; // 연속 성공 시간 초기화
        }else{ 
            // 체력 회복
            answer = Math.min(answer+bandage[1],health); // 최대 체력을 초과하지 않도록 제한
    
            // 연속 성공 시간 증가
            continuousHealTime += 1;
            
            // 연속 성공 조건 충족 시 추가로 회복
            if(continuousHealTime >= bandage[0]){
                answer = Math.min(answer+bandage[2],health); // 최대 체력을 초과하지 않도록 제한
                continuousHealTime = 0; // 연속 성공 시간 초기화
            }
        }
        
        if(answer <= 0) break; // 체력이 0 이하이면 캐릭터는 죽음
    }
    
    // 캐릭터의 체력이 0 이하이면 -1을 반환
    return answer <= 0 ? -1 : answer;
}