function solution(s) {
    var answer = 0; // 분해한 문자열의 개수
    var x = s[0]; // 각각 문자열의 첫글자
    var cnt_yes = 0; // x와 같은 글자가 나온 횟수
    var cnt_no = 0; // 다른 글자가 나온 횟수

    for(let i = 0; i < s.length; i++){
        if(x == s[i]){
            cnt_yes++;
        }else{
            cnt_no++;
        }
        
        // x와 같은 글자 수와 다른 글자 수가 같아지거나, 문자열s의 끝에 도달했을 때
        if(cnt_yes == cnt_no || i == s.length-1){
            answer++; // 분해한 문자열 개수 증가
            // 횟수 초기화
            cnt_yes = 0; 
            cnt_no = 0;
            // 다음 기준 글자 설정
            x = s[i+1];
         
        }
    }
    return answer;
}