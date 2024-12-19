function solution(s){
    var p_count = 0;
    var y_count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'p' || s[i] == 'P'){
            p_count++;
        }
        else if(s[i] == 'y' || s[i] == 'Y'){
            y_count++;
        }
        
    }

    return p_count == y_count?true:false;
}