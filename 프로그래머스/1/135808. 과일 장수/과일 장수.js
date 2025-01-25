function solution(k, m, score) {
    var answer = 0;
    // 점수를 내림차순으로 정렬
    score.sort((a,b) => b-a);
    
    // m개씩 그룹을 나눈 후 각 그룹의 최소점수 선택
    for(let i = m-1; i < score.length-(score.length % m); i += m){
        answer += score[i];
    }
    
    // 최소점수 합 * 한 상자에 담긴 사과 개수
    return answer*m; 
}