function solution(arr)
{
    var answer = [];
    
    //arr의 첫 번째 원소값 push
    answer.push(arr[0])
    
    //두 번째 원소부터 이전 원소값과 비교하여 다르면 push
    for(let i = 1;i < arr.length; i++){
        if(arr[i] !== arr[i-1]){
            answer.push(arr[i]);
        }
    }
    
    return answer;
}