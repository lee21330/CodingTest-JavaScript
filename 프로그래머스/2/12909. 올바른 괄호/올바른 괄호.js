function solution(s){
    var array = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] == '('){
            array.push('(');
        }else{
            if(array.length === 0) return false;
            else array.pop();
        }
    }

    return array.length === 0;
}