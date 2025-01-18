function solution(babbling) {
    var answer = 0;
    
    for(let i = 0; i < babbling.length; i++){
        babbling[i] = babbling[i].replaceAll("aya",1).replaceAll("ye",2).replaceAll("woo",3).replaceAll("ma",4);
        if(!isNaN(babbling[i])){
            const word = babbling[i].split("");
            var isAnswer = true;
            for(let j = 1; j < word.length; j++){
                if(word[j] == word[j-1]){
                    isAnswer = false;
                }
            }
            if(isAnswer == true) answer++;
        }   
    }
    
    return answer;
}