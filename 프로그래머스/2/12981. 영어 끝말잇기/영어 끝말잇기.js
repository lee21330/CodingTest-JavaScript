function solution(n, words) {
    var playerNumber = 1; // 번호
    var round = 1; //차례
    var usedWords = [words[0]];
    
    for(let i = 1; i < words.length; i++){
        playerNumber++;
        
        if(playerNumber > n){
            playerNumber = 1; 
            round++;
        } 
        
        if(words[i-1].slice(-1) !== words[i].slice(0,1)) break;
        if(usedWords.includes(words[i])) break;
        if(words[i].length === 1) break;
    
        usedWords.push(words[i]);
    }
    
    if(usedWords.length === words.length) return [0, 0];

    return [playerNumber,round];
}