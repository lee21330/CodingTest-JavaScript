function solution(n, arr1, arr2) {
    var answer = [];

    for(let i = 0; i < arr1.length; i++){
        const array = (arr1[i] | arr2[i]).toString(2).padStart(n,0);
        var string = '';
        for(let j = 0; j < n; j++){
            if(array[j] == 1){
                string += '#';
            }else{
                string += ' ';
            }
        }
        answer.push(string);
    }

    return answer;
}