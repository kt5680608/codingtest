// 정수 내림차순으로 배치하기
function solution(n) {
    let stringN = String(n);
    let arrayN = stringN.split("");
    arrayN.sort((a, b) => b - a);
    return Number(arrayN.join(""));
}
