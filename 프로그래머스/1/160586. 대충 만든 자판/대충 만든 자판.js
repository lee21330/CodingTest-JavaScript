function solution(keymap, targets) {
    var answer = [];
    for(let i = 0; i < targets.length; i++){
        var total_press = 0; // 해당 문자열을 작성하기 위해 눌러야 하는 최소 횟수
        for(let j = 0; j < targets[i].length; j++){
            var letter = targets[i][j]; // 현재 눌러야 하는 문자
            var index = Infinity; 
            for(let k = 0; k < keymap.length; k++){
                let keyIndex = keymap[k].indexOf(letter); // keymap에서 해당 문자 위치 찾기
                if(keyIndex != -1 && index > keyIndex){ // 해당 문자가 keymap에 존재하고 현재까지의 최소 횟수보다 작다면
                    index = keyIndex; // 더 작은 인덱스로 갱신
                }
                
            }
            if(index == Infinity){ // keymap에 해당 문자가 없으면
                total_press = -1; // -1
                break; // 더 이상 확인할 필요없으므로 반복문 종료
            }else{
                total_press += index+1; // 인덱스는 0부터 시작하므로 +1
            }
                
        }
        answer.push(total_press);
    }
    
    return answer;
}