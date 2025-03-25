function solution(brown, yellow) {
    var yellowX = 0, yellowY=0;
    for(let i = yellow; i >= 1; i--){ // yellow 약수 찾기
        if(yellow % i == 0){
            yellowX = i;
            yellowY = yellow/i;
            if((yellowX + 2)*(yellowY + 2) == brown + yellow) return [yellowX + 2,yellowY + 2];
        }
    }
}