function solution(n, lost, reserve) {
    // 도난당한 학생 중 여벌 체육복이 있는 학생 제거
    var lost_student = lost.filter((i) => !reserve.includes(i)).sort((a,b)=>a-b);
    var reserve_student = reserve.filter((i) => !lost.includes(i)); 

    // 체육 수업을 들릴 수 있는 학생 수 = 전체 학생 수 - 체육복을 빌리지 못한 학생 수 
    var answer = n - lost_student.length;
    
    // 체육복을 빌리지 못하는 학생 구하기
    for (let i = 0; i < lost_student.length; i++) {
        // 현재 학생의 앞 번호 여벌 체육복이 있는지 확인
        var index = reserve_student.indexOf(lost_student[i] - 1);
        if (index !== -1) { // 현재 학생의 앞 번호가 존재하면
            answer++; // 수업 들을 수 있는 학생 수 증가
            reserve_student.splice(index, 1); // 여벌 체육복 명단에서 빌린 체육복 제거
            continue; // 앞 번호에서 빌렸으면 뒷 번호는 확인X
        }
        
        // 현재 학생의 뒷 번호 여벌 체육복이 있는지 확인
        index = reserve_student.indexOf(lost_student[i] + 1);
        if (index !== -1) {
            answer++;
            reserve_student.splice(index, 1);
        }
    }

    return answer;
}