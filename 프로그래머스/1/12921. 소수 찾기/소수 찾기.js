function solution(n) {
    var answer = 0;
    var array = Array.from({length:n+1},x => true);
    array[0] = false, array[1] = false;

    for(let i = 2; i <= n; i++){    
        for(let j = 2; i*j <= n; j++){
            array[i*j] = false;
        }
    }
   
    for(let i = 0; i < array.length; i++){
        if(array[i] == true){
            answer++;
        }
    }
    
    return answer;
}