function solution(board, moves) {
    var answer = 0;
    var array = [];
    
    for(let i = 0; i < moves.length; i++){
        const move = moves[i] - 1;
        for(let j = 0; j < board.length; j++){
            
            if(board[j][move] != 0){ // 윗줄부터 인형이 있는지 확인
                const doll = board[j][move];
                board[j][move] = 0; // 뽑은 인형을 0으로 설정
                
                if(array[array.length-1] == doll){ // 마지막으로 뽑은 인형과 같으면
                    array.pop(); // 제거
                    answer += 2; // 인형 개수 더하기
                }else{
                    array.push(doll); // 다른 인형이면 배열에 추가
                }
                
                break; //한 번에 한 열만 처리
            }
        }
    }
    return answer;
}