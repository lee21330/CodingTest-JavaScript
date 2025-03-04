function solution(today, terms, privacies) {
    var answer = [];
    // 오늘 날짜
    today = new Date(today);
    
    // 약관 종류와 유효기간 분리해 Map에 저장
    let termsMap = new Map();
    terms.forEach(term => {
        let [type, months] = term.split(' ');
        termsMap.set(type, Number(months)); 
    });

    // 파기해야 할 개인정보 번호 찾기
    privacies.forEach((privacy, index) => {
        let [date, type] = privacy.split(' '); 
    
        // 유효기간 구하기
        let expiryDate = new Date(date);
        expiryDate.setMonth(expiryDate.getMonth() + termsMap.get(type));
        
        // 만료일이 지났으면 파기
        if (expiryDate <= today) {
            answer.push(index + 1); 
        }
    });
    return answer;
}