function solution(name, yearning, photo) {
    var answer = [];
   
    for(let i = 0; i < photo.length; i++){
        var sum = 0; // 현재 사진에 포함된 인물들의 총 추억 점수
        for(let j = 0; j < photo[i].length; j++){
            var idx = name.indexOf(photo[i][j]); // 현재 사진 속 인물의 인덱스
            if(idx != -1){ // name 배열에 해당 인물이 존재할 경우
                sum += yearning[idx]; // 해당 인물의 그리움 점수를 sum에 더하기
            }           
        }
        answer.push(sum); // 현재 사진의 총 추억 점수를 answer 배열에 추가
    }
    
    return answer;
}