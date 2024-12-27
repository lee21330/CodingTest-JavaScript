function solution(s) {
    var answer = [];
    var array = '';
    
    for(let i = 0; i < s.length; i++){
        var number = array.includes(s[i])?array.length-array.lastIndexOf(s[i]):-1;
        answer.push(number);
        array += s[i];
    }
    return answer;
} 