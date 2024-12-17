function solution(phone_number) {
    var answer = phone_number.slice(0,phone_number.length-4).replace(/\d/g,'*') + phone_number.slice(-4) ;
    return answer;
}