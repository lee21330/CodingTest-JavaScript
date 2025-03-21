function solution(s) {
    var binCount = 0; // 이진 변환의 횟수
    var zeroCount = 0; // 제거할 0의 개수
    
    while(s !== '1'){
        const sLen = s.length; // 변환 이전 문자열 길이 저장
        s = s.replaceAll('0',''); // 0 제거
        zeroCount += sLen-s.length; // 제거된 0의 개수 누적
        
        binCount++; // 이진 변환의 횟수 증가
        s = s.length.toString(2); // 남은 문제열 길이를 2진수로 변환
    }
    
    return [binCount,zeroCount];
}