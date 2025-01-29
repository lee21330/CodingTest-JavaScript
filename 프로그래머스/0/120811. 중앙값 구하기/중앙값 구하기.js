function solution(array) {
    var len = Math.floor(array.length/2);
    array.sort((a,b)=>a-b);
    return array[len];
}