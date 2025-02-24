function solution(X, Y) {
    var answer = '';
    // X와 Y를 배열로 변환
    var array_x = X.split('');
    var array_y = Y.split('');
    
    // 9부터 0까지 공통된 숫자 찾기
    for(let i = 9 ; i >= 0 ; i --) {
        // X에서 숫자 i 횟수 구하기
        const countX = array_x.filter(num => Number(num) === i).length;
        // Y에서 숫자 i 횟수 구하기
        const countY = array_y.filter(num => Number(num) === i).length;
        // X와 Y에서 공통으로 등장하는 숫자의 최소 개수를 answer에 더하기
        answer += String(i).repeat(Math.min(countX, countY));
    }
    
    // 공통된 숫자가 없는 경우
    if(answer === '') return "-1";

    return Number(answer) === 0?"0":answer;
}