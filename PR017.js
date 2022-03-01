// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    let answer = [];
    arr.forEach((value) => {
        if (value % divisor === 0) {
            answer.push(value);
        }
    });
    if (answer.length === 0) {
        answer.push(-1);
    }
    return answer.sort((a, b) => a - b);
}
