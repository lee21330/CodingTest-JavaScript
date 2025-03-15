// 분:초 => 초
function minutesToSeconds(time){
    const [minute, second] = time.split(':').map(i=>Number(i));
    return minute*60+second;
}
// 초 => 분:초
function secondsToMinutes(time){
    const minute = Math.floor(time/60);
    const second = time%60;
    return String(minute).padStart(2,0)+':'+String(second).padStart(2,0);
}
function solution(video_len, pos, op_start, op_end, commands) {
    // 초 단위로 변환
    video_len = minutesToSeconds(video_len);
    pos = minutesToSeconds(pos);
    op_start = minutesToSeconds(op_start);
    op_end = minutesToSeconds(op_end);

    // 오프닝 건너뛰기
    if(pos >= op_start && pos <= op_end) pos = op_end;
    
    // 10초 전으로 이동, 10초 후로 이동
    for(let i = 0; i < commands.length; i++){
        if(commands[i] == 'next'){
            pos += 10;
        }else{
            pos -= 10;
        }
        // 동영상 길이 제한
        pos = Math.min(pos, video_len);
        pos = Math.max(pos, 0);
        
        // 오프닝 건너뛰기 구간인지 체크
        if(pos >= op_start && pos <= op_end) pos = op_end;
    }
    
    return secondsToMinutes(pos);
}