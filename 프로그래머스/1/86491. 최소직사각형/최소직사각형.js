function solution(sizes) {
    var maxWidth = 0;
    var maxHeight = 0;
    
    // 큰 값이 가로가 되도록 정렬
    for(let i = 0; i < sizes.length; i++){
        sizes[i].sort((a,b)=>b-a);     
    }
    
    // 가로와 세로 최대값 구하기
    for(let i = 0; i < sizes.length; i++){
        maxWidth = maxWidth > sizes[i][0]?maxWidth:sizes[i][0]
        maxHeight = maxHeight > sizes[i][1]?maxHeight:sizes[i][1]
    }
    return maxWidth*maxHeight;
}