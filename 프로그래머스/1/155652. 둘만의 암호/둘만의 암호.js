function solution(s, skip, index) {
    var answer = '';
    // skip할 알파벳 제외
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').filter((i)=>!skip.includes(i));
    
    for(let i = 0; i < s.length; i++){
        var idx = alphabet.indexOf(s[i]);
        for(let j = 0; j < index; j++){
            idx++;
            if(idx == alphabet.length) idx = 0;
        }
        answer += alphabet[idx];
    }
    
    return answer;
}