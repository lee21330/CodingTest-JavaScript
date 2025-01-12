function solution(number, limit, power) {
    var answer = 0;
    // 기사단 약수 개수 리스트
    var number_list = [];
    // 해당 기사 번호의 약수 개수
    var divisor = 0;

    for(let i = 1; i <= number; i++){
        // 각 기사의 약수 개수 구하기
        divisor = 0;
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(j*j == i){
                divisor += 1;
            }else if(i%j == 0){
                divisor += 2;
            }
        }
        if(divisor > limit){ // 약수 개수가 공격력의 제한수치를 초과한
            divisor = power; // 기사의 무기 공격력은 power
        }
        answer += divisor; 
    }
    

    
    return answer;
}