function solution(x) {
    var array = x.toString().split('');
    var sum = 0;
    
    for(let i = 0; i < array.length; i++){
        sum += parseInt(array[i]);
    }
    
    return x%sum == 0?true:false;
}