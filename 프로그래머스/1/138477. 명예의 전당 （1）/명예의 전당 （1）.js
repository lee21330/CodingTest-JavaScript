function solution(k, score) {
    var answer = [];
    var HOF = [];

    for(let i = 0; i < score.length; i++){
        HOF.push(score[i]); // 현재 점수를 HOF에 추가
        if(HOF.length > k){ // HOF의 크기가 k보다 큰 경우
            HOF.sort((a,b) => b - a); // HOF 내림차순으로 정렬
            HOF.pop(); // 마지막 원소 제거
        }
        answer.push(Math.min(...HOF)); // HOF의 최소값을 answer에 추가
    }
    
   
    return answer;
}