function solution(n)
{
    return n.toString(2).split('').filter(i=> i==1).length;
}