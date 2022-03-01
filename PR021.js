// 가운데 글자 가져오기
function solution(s) {
    let answer = [];
    if (s.length % 2 === 0) {
        answer.push(s[s.length / 2 - 1]);
        answer.push(s[s.length / 2]);
    } else {
        answer.push(s[parseInt(s.length / 2)]);
    }
    return answer.join("");
}
