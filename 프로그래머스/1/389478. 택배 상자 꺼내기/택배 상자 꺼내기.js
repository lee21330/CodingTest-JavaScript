function solution(n, w, num) {
    var answer = 0;
    var count = 1; // 삽입할 숫자 (1부터 시작)
    var array = Array.from({ length: Math.ceil(n / w) }, () => 
    Array.from({ length: w }, () => count <= n? count++: null) // 각 행에 w개의 숫자를 순서대로 채우고, n을 초과하면 null 삽입
);
    
    for(let i = 1; i < array.length; i = i+2){ 
        array[i].reverse(); // 짝수 번째 행은 순서 반대로
    }
    
    // num의 위치 찾기
    let colIndex = -1; // 열
    let rowIndex = -1; // 행
    for(let i = 0; i < array.length; i++){
        colIndex = array[i].indexOf(num); // 행에서 num이 위치한 열 찾기(없으면 -1)
        if(colIndex != -1) { // 해당 행에 num이 존재하면
            rowIndex = i; // 해당 행 저장
            break;
        }
    }

    for(let i = rowIndex; i < array.length; i++){ //rowIndex 줄부터 
        if(array[i][colIndex]) answer++; // 같은 colIndex의 숫자 개수 세기
    }
    return answer;
}