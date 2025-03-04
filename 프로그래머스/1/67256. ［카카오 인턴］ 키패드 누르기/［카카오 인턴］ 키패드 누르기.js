// 이동 횟수 계산하는 함수
function calcDistance(handPos, targetPos){
        let rowDist = Math.abs(handPos[0] - targetPos[0]);
        let colDist = Math.abs(handPos[1] - targetPos[1]);
        return rowDist + colDist;  // 세로+가로 거리
    };

function solution(numbers, hand) {
    var answer = '';
    const position = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };

    // 초기 손 위치
    var leftHand = [3, 0];  
    var rightHand = [3, 2];
    
    // 누른 손가락이 어느 손인지 판단하기
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i]
        if (num === 1 || num === 4 || num === 7) {
            answer += 'L';
            leftHand = position[num];  // 왼손 위치 업데이트
        } else if (num === 3 || num === 6 || num === 9) {
            answer += 'R';
            rightHand = position[num];  // 오른손 위치 업데이트
        } else {
            let leftDist = calcDistance(leftHand, position[num]);  // 왼손과의 거리
            let rightDist = calcDistance(rightHand, position[num]);  // 오른손과의 거리

            if (leftDist < rightDist) {
                // 왼손이 더 가까운 경우
                answer += 'L';
                leftHand = position[num];  // 왼손 위치 업데이트
            } else if (rightDist < leftDist) {
                // 오른손이 더 가까운 경우
                answer += 'R';
                rightHand = position[num];  // 오른손 위치 업데이트
            } else {
                // 거리가 같은 경우
                if (hand === 'left') {
                    answer += 'L';
                    leftHand = position[num];  // 왼손 위치 업데이트
                } else {
                    answer += 'R';
                    rightHand = position[num];  // 오른손 위치 업데이트
                }
            }
        }
    }

    return answer;
}
