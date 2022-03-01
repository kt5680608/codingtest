// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    let answer = [];
    let count = 0;
    let value = 0;
    while (count < n) {
        value += x;
        answer.push(value);
        count++;
    }
    return answer;
}
