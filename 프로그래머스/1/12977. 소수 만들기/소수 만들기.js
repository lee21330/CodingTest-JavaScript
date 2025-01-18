function solution(nums) {
    var answer = 0;
    var array = [];
    var cnt = 0;
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k < nums.length; k++){
                array.push(nums[i]+nums[j]+nums[k]);
            }
        }
    }
    for(let i = 0; i < array.length; i++){
        cnt = 0;
        for(let j = 1; j <= array[i]; j++){
            if(array[i]%j == 0) cnt++;
        }
        if(cnt == 2){
            answer++;
        }  
    }
    
    return answer;
}