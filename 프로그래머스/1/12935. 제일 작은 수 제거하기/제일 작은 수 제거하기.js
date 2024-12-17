function solution(arr) {
    return arr.length ===1?[-1]:arr.filter((i)=> i !== Math.min(...arr));
}