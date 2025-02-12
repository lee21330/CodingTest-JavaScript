// 맞힌 개수에 따라 로또의 순위를 구하는 함수
function getLottoRank(num){
    switch(num){
        case 6:
            return 1;
        case 5:
            return 2;
        case 4:
            return 3;
        case 3:
            return 4;
        case 2:
            return 5;
        default:
            return 6;
    }
} 
function solution(lottos, win_nums) {
    // 0의 개수 구하기
    var zero_cnt = lottos.filter((i)=>i==0).length;
    
    // 맞힌 번호 개수 구하기
    var ans_cnt= lottos.filter((i)=>win_nums.includes(i)).length;
    
    return [getLottoRank(ans_cnt+zero_cnt),getLottoRank(ans_cnt)];
}