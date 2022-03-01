// 문자열 내림차순으로 배치하기
function solution(s) {
    s = s.split("");
    s.sort().reverse();
    return s.join("");
}
