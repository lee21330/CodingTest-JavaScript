function solution(s) {
    var arr = s.split('');
    var index = 0; 
    
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == ' '){ // 공백일때 index 초기화
            index = 0;
        }else{
            arr[i] = index % 2 == 0?arr[i].toUpperCase():arr[i].toLowerCase();
            index++;
        }
    }
    
    return arr.join('');
}