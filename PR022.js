// 최소 직사각형
function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] < sizes[i][1]) {
            sizes[i].reverse();
        }
        if (maxWidth < sizes[i][0]) {
            maxWidth = sizes[i][0];
        }
        if (maxHeight < sizes[i][1]) {
            maxHeight = sizes[i][1];
        }
    }
    return maxWidth * maxHeight;
}
