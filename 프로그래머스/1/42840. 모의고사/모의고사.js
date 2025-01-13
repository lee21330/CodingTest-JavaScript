function solution(answers) {
    var answer = [0,0,0];
    var answer_01 = [1,2,3,4,5];
    var answer_02 = [2,1,2,3,2,4,2,5];
    var answer_03 = [3,3,1,1,2,2,4,4,5,5];
    var cnt_01 = 0;
    var cnt_02 = 0;
    var cnt_03 = 0;
    var array = [];

    for(let i = 0; i < answers.length; i++){
      
        if(answers[i] == Number(answer_01[cnt_01])){
            answer[0] += 1; 
        }
        if(answers[i] == Number(answer_02[cnt_02])){
            answer[1] += 1;    
        }
        if(answers[i] == Number(answer_03[cnt_03])){
            answer[2] += 1;   
        }
        cnt_01++;
        cnt_02++;
        cnt_03++;
         if(cnt_01 >= answer_01.length){
                cnt_01 = 0;
            }
         if(cnt_02 >= answer_02.length){
                cnt_02 = 0;
            }
         if(cnt_03 >= answer_03.length){
                cnt_03 = 0;
            }
    }


    for(let i = 0; i < 3; i++){
        if( Math.max(...answer) == answer[i]){
            array.push(i+1);
        }
    }

    return array;
}