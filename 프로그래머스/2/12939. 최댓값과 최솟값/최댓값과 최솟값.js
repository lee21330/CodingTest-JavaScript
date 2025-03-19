function solution(s) {
    var array = s.split(' ');
    return Math.min(...array)+" "+Math.max(...array);
}