// 이상한 문자 만들기
function solution(s) {
    let answer = [];
    s = s.split(" ");
    for (let i = 0; i < s.length; i++) {
        let splited = [...s[i]];
        for (let j = 0; j < splited.length; j++) {
            if (j === 0 || j % 2 === 0) {
                splited[j] = splited[j].toUpperCase();
            } else {
                splited[j] = splited[j].toLowerCase();
            }
        }
        splited = splited.join("");
        answer.push(splited);
    }
    return answer.join(" ");
}
