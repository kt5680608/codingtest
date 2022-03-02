// 3진법 뒤집기
function solution(n) {
    n = n.toString(3).split("");
    n = n.reverse().join("");
    n = Number.parseInt(n, 3);
    return n;
}
