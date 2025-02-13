function solution(s, skip, index) {
    var answer = '';
    // skip에 포함된 알파벳 제외
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('').filter((i)=>!skip.includes(i));
    var idx = 0;
    
    for(let i = 0; i < s.length; i++){
        idx = alphabet.indexOf(s[i]); // 현재 문자가 alphabet에서 위치한 인덱스
        for(let j = 0; j < index; j++){ 
            idx++; // 주어진 index만큼 이동
            if(idx == alphabet.length){
                idx = 0; // 범위를 벗어나면 0으로 돌아감
            } 
        }
        answer += alphabet[idx];
    }
    
    return answer;
}