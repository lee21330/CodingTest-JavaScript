function solution(s, n) {
    var answer = '';
    for(let i = 0; i < s.length; i++){
        var number = s.charCodeAt(i);
        if(s[i] == ' '){ 
            answer += ' '
        }else{ 
            for(let j = 0; j < n; j++){
                number = (number == 90 || number == 122)? number - 25: number + 1;
            }
            answer += String.fromCharCode(number);
        }
    }
        
    return answer;
}