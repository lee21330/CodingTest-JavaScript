function solution(n,a,b)
{
    var answer = 1;
    var orderA = Math.min(a,b);
    var orderB = Math.max(a,b);
    
    while(orderA % 2 === 0 || orderB != orderA+1){
        orderA = Math.ceil(orderA / 2);
        orderB = Math.ceil(orderB / 2);
        answer++;
    }

    return answer;
}