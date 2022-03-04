// 124나라의 숫자
function solution(n) {
    let answer = [];
    while (n !== 0) {
        if (n % 3 === 0) {
            answer.unshift(4);
            n = Math.floor(n / 3) - 1;
        } else {
            answer.unshift(n % 3);
            n = Math.floor(n / 3);
        }
    }
    return answer.join("");
}
