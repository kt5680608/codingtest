// 없는 숫자 더하기
function solution(numbers) {
    let answer = 0;
    for (let i = 0; i < 10; i++) {
        if (numbers.indexOf(i) === -1) {
            answer += i;
        }
    }
    return answer;
}