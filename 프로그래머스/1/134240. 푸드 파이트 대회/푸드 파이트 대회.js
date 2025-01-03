function solution(food) {
    var answer = '';
    
    for(let i = 1; i < food.length; i++){
        answer += i.toString().repeat(Math.floor(food[i]/2));
    }
    answer += '0' + answer.split('').reverse().join('');
    
    return answer;
}