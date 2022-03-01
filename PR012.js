// 제일 작은 수 제거하기
function solution(arr) {
    let answer = [];
    let minValue = Math.min.apply(null, arr);
    if (arr.length > 1) {
        arr.splice(arr.indexOf(minValue), 1);
        answer.push(...arr);
    } else {
        answer.push(-1);
    }
    return answer;
}
