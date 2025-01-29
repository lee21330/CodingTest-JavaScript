function solution(n, numlist) {
    return numlist.filter(element=>{
        return element % n === 0;
    });
}