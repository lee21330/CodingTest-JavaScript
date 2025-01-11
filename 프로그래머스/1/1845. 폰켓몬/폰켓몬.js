function solution(nums) {
    // 고를 폰켓몬 수
    var answer = nums.length/2;
    
    // 폰켓몬 종류 수
    const set = new Set(nums);
    const array = [...set];

    return answer <= array.length?answer:array.length;
}