function solution(s) {
    var answer = 0;
    var x = s[0];
    var cnt_yes = 0;
    var cnt_no = 0;

    for(let i = 0; i < s.length; i++){
        if(x == s[i]){
            cnt_yes++;
        }else{
            cnt_no++;
        }

        if(cnt_yes == cnt_no || i == s.length-1){
            answer++;
            // if(i != s.length-1){
                cnt_yes = 0;
                cnt_no = 0;
                x = s[i+1];
            // }   
        }
    }
    return answer;
}