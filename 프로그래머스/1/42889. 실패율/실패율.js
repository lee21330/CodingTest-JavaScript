function solution(N, stages) {
    var answer = [];
    var array = [];
    var fail_percent = 0;
    var len = stages.length;
    
    // 중복 값 개수 구하기
    const counts = stages.reduce((acc,cur)=>{
        acc[cur] = (acc[cur] || 0 ) + 1;
        return acc;
    },{});
    
    // 실패율 구하기
    for(let i = 1; i <= N; i++){
        fail_percent = counts[i]/len || 0 ;
        array.push([i,fail_percent]);
        len -= counts[i] || 0;
    }

    // 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열 구하기
    array.sort((a,b) => b[1] - a[1]);
    for(let i = 0; i < array.length; i++){
        answer.push(array[i][0]);
    }

    return answer;
}