// 자릿수 더하기
function solution(n) {
    n = String(n).split("");
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += Number(n[i]);
    }
    return sum;
}
