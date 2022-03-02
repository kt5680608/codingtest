// 문자열을 정수로 바꾸기
function solution(s) {
    s = s.split();
    return s[0] === "-" ? Number(s.join("")) * -1 : Number(s.join(""));
}
