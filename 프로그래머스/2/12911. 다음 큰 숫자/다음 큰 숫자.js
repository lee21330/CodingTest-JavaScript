function solution(n) {
    var count = n+1;
    var n_len = n.toString(2).replaceAll('0','').length; // n을 2진수로 변환했을 때 1의 갯수
    while(n_len != count.toString(2).replaceAll('0','').length){
        count++;
    }
    return count;
}