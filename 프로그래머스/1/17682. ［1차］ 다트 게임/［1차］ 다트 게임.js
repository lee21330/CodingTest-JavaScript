function solution(dartResult) {
    // 세트별로 수식 분리
    var array = dartResult.match(/\d+[^0-9]*/g);
    // 각 세트 점수 담을 배열
    var answer = [];
    
    // 각 세트 점수 구하기
    for(let i = 0; i < array.length; i++){
        var num = 0;
        //정수, 문자, 특수기호 분리
        var numbers = array[i].match(/(\d+|[a-zA-Z]|\*|#)/g);
        
        switch(numbers[1]){
            case 'S': 
                num = Number(numbers[0])**1; // 1제곱
                break;
            case 'D':
                num = Number(numbers[0])**2; // 2제곱
                break;
            default:
                num = Number(numbers[0])**3; // 3제곱
                break;
        }
        answer.push(num);
        // '*'일 때, 해당 점수와 바로 전 점수 각 2배
        if(numbers[2] == '*'){
            answer[i-1] = answer[i-1] * 2;
            answer[i] = answer[i] * 2;
        }
        // '#'일 때, 해당 점수 마이너스
        if(numbers[2] == '#'){
            answer[i] = answer[i] * (-1);
        }
    }
    
    // 모든 세트 점수 합 구하기
    return answer.reduce((a,b)=>(a+b));
}