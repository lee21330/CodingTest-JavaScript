function solution(k, tangerine) {
    var answer = 0;
    var tangerineCount = 0;
    var tangerineKinds = new Array(Math.max(...tangerine)).fill(0);
    
    tangerine.forEach((number) => {
        tangerineKinds[number-1] += 1;
    });
    tangerineKinds.sort((a,b) => b - a);

    for(let i = 0; i < tangerineKinds.length; i++){
        tangerineCount += tangerineKinds[i];
        answer++;
        if(tangerineCount >= k) break;
    }
    return answer;
}