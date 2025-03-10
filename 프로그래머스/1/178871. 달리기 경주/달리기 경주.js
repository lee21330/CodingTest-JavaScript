function solution(players, callings) {
    // 선수 순서를 map에 저장
    let ranking = new Map();
    players.forEach((player,index) => {
        ranking.set(player, index); 
    });

    for(let i = 0 ; i < callings.length; i++){
        const idx = ranking.get(callings[i]); // 추월한 선수의 현재 순서
        const player = players[idx - 1];  // 앞에 있던 선수
        
        // players 배열에서 위치 변경
        players[idx - 1] = players[idx];
        players[idx] = player; 
        
        // ranking 정보 변경
        ranking.set(callings[i], idx - 1);
        ranking.set(player, idx);

    }
    return players;
}