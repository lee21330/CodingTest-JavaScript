function solution(survey, choices) {
    var answer = '';
    var obj = {R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0};

    for(let i = 0; i < survey.length; i++){
        // 현재 성격 유형을 문자 배열로 변환
        const array = survey[i].split(''); 
        // 선택지가 4보다 크면 두 번째 문자에 점수 더하기
        if(choices[i] > 4){
            obj[array[1]] += choices[i] -4;
        // 선택지가 4보다 작으면 첫 번째 문자에 점수 더하기  
        } else if(choices[i] < 4){
            obj[array[0]] += 4 - choices[i];
        }
    }
    // 점수가 같으면 사전순으로 앞에 오는 문자 선택
    answer += obj["R"] >= obj["T"] ? "R" : "T";
    answer += obj["C"] >= obj["F"] ? "C" : "F";
    answer += obj["J"] >= obj["M"] ? "J" : "M";
    answer += obj["A"] >= obj["N"] ? "A" : "N";

    return answer;
}