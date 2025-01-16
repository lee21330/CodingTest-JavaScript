function solution(n, m, section) {
    var answer = 0;
    var array = Array.from({length:n},num => true);
    for(let i = 0; i < section.length; i++){
        array[section[i]-1] = false;
    }

    for(let i = 0; i < n; i++){
        if(array[i] == false){
            for(let j = i; j < i+m; j++){
                array[j] = true;
            }
            answer++;
        }
    }

    return answer;
}