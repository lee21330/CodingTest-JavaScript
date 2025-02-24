function solution(ingredient) {
    var answer = 0;
    var array = [];
    
    for(let i = 0; i < ingredient.length; i++){
        array.push(ingredient[i]);
        // array에 들어간 마지막 요소 4개가 1231일 때
        if(array.slice(-4).join('') == '1231'){
            answer++; // 햄버거의 개수 +1
            array.splice(-4); // 마지막 요소 4개 제거
        }
    }
    return answer;
}