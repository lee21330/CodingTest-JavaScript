function solution(park, routes) {
    var W = park[0].length-1; // 가로 인덱스의 최댓값
    var H = park.length-1; // 세로 인덱스의 최댓값
   
    var positionW = 0; // 가로 방향 좌표
    var positionH = 0; // 세로 방향 좌표
    
    // 처음 위치 구하기
    for(let i = 0; i < park.length; i++){
        if(park[i].indexOf('S') != -1){
            positionW = park[i].indexOf('S') ;
            positionH = i;
            break; // 위치 찾으면 종료
        }
    }   
    
    // 이동 가능 여부 확인 함수
    function isMoveable(direction, distance, positionW, positionH){
        let newW = positionW;
        let newH = positionH;
        
        for(let j = 0; j < distance; j++){ // 주어진 칸의 수만큼 이동할 때
            if(direction == 'N'){
                if(newH - 1 < 0 || park[newH - 1][newW] === 'X') return false; // 공원 범위를 넘어가거나 장애물을 만나면 false
                newH --; 
            }else if(direction == 'S'){
                if(newH + 1 > H || park[newH + 1][newW] === 'X') return false;
                newH ++; 
            }else if(direction == 'W'){
                if(newW -1 < 0 || park[newH][newW - 1] === 'X') return false;
                newW --;
            }else if(direction == 'E'){
                if(newW + 1 > W || park[newH][newW + 1] === 'X') return false;
                newW ++;
            }
        }
        return true; // 아니면 true
    }

    // 명령대로 이동하기
    for(let i = 0; i < routes.length; i++){
        const route = routes[i].split(' '); // 이동할 방향과 칸의 수 분리
        const direction = route[0];
        const distance = Number(route[1]);
        
        if(isMoveable(direction, distance, positionW, positionH)){ // 이동 가능하면 명령 수행
            if(direction == 'N'){
                positionH -= distance;
            }else if(direction == 'S'){
                positionH += distance;
            }else if(direction == 'W'){
                positionW -= distance;
            }else if(direction == 'E'){
                positionW += distance;
            }
        }
    }
    
    return [positionH,positionW];
}