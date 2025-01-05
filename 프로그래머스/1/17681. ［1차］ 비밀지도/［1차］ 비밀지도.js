function solution(n, arr1, arr2) {
    var answer = [];
    var array = [];
    var string = '';
    for(let i = 0; i < arr1.length; i++){
        array.push([arr1[i].toString(2).padStart(n,0),arr2[i].toString(2).padStart(n,0)]);
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(array[i][0][j] == 1 || array[i][1][j] == 1){
                string += '#';
            }else{
                string += ' ';
            }
        }
        
        answer.push(string);
        string = '';
    }
    return answer;
}