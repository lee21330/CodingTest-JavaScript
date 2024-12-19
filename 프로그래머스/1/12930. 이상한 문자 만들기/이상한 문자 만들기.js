function solution(s) {
    var arr = s.split('');
    var index = 0;
    
    for(let i = 0; i < arr.length; i++){
        // 새로운 단어일때 index를 0으로 초기화
        if (arr[i] == ' '){
            index = 0;
        }else{
            // 단어의 짝수번째 알파벳은 대문자로
            if(index % 2 === 0){
                arr[i] = arr[i].toUpperCase();
            // 단어의 홀수번째 알파벳은 소문자로
            }else{
                arr[i] = arr[i].toLowerCase();
            }
            index++;
        }
        
    }

    return arr.join('');
}