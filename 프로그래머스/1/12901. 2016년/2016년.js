function solution(a, b) {

    const date = new Date(`2016-${a}-${b}`);
    const day = date.getDay();
    var week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    
    return week[day];
}