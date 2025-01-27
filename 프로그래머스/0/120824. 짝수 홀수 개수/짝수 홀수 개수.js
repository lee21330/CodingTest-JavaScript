function solution(num_list) {
    var answer = [];
    var cnt_odd = 0;
    var cnt_even = 0;
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i]%2 == 0) {
            cnt_even++
        }else{
            cnt_odd++;
        }
    }
    answer.push(cnt_even);
    answer.push(cnt_odd);
    return answer;
}