function solution(s){
    var array = [s[0]];
    for(let i = 1; i < s.length; i++){
        if(s[i] == array[array.length - 1]) array.pop();
        else array.push(s[i]);
    }
    return array.length == 0?1:0;
}