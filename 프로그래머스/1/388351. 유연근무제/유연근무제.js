function solution(schedules, timelogs, startday) {
    var answer = 0;
    for(let i = 0; i < schedules.length; i++){
        // 출근 인정 시각 구하기
        const hour = Math.floor(schedules[i] / 100);  // 시 
        const minute = schedules[i] % 100;           // 분 
        let goalMinute = minute + 10;                
        let goalHour = hour;

        if (goalMinute >= 60) {
            goalMinute -= 60;  
            goalHour += 1;    
        }
        const goalTime = goalHour * 100 + goalMinute;
        
        // 상품 받을 직원 수 구하기
        let cnt = 0; // 해당 직원이 지각하지 않은 날 카운트
        for (let j = 0; j < 7; j++) {
            const day = (j + startday) % 7;
            
            if (day == 0 || day == 6) { // 주말은 건너뛰기
                continue;
            }
            
            if (goalTime < timelogs[i][j]) { // 출근 인정 시각보다 늦으면
                break; // 상품 받을 수 없으므로 루프 종료
            }
            cnt++;
        }

        if (cnt == 5) { // 5일 모두 지각하지 않았으면
            answer++; // 상품 받는 직원수 증가
        } 
    }
    return answer;
}