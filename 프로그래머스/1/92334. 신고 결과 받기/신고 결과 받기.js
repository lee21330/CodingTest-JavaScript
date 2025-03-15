function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0); // id_list만큼 0으로 초기화
    var reportedUsers = new Map(); // 신고당한 이용자 신고횟수 저장
    // 한 유저가 같은 유저를 여러 번 신고한 경우 신고 횟수 1회로 처리 => 중복 제거
    const uniqueReport = [...new Set(report)];
    
    uniqueReport.forEach((list,index,arr) => {
        arr[index] = list.split(' '); // 신고자와 신고당한 이용자 나누기
        reportedUsers.set(arr[index][1],(reportedUsers.get(arr[index][1]) || 0) + 1); // 기존값이 있으면 가져오고, 아니면 0으로 초기화
    });

    // 각각 유저가 메일 받은 횟수 구하기
    reportedUsers.forEach((count,name) =>{ // 신고당한 이용자 리스트에서
        if(count >= k){ // 정지 기준보다 높은 이용자가 있으면
            uniqueReport.forEach((list)=>{
                if(list[1] == name) answer[id_list.indexOf(list[0])] ++; // 신고자 횟수 증가
            });
        }
    });
    return answer;
}