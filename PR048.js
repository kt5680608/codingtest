// 최댓값과 최솟값
function solution(s) {
    let answer = [];
    s = s.split(" ");
    for (let i = 0; i < s.length; i++) {
        s[i] = Number(s[i]);
    }
    s.sort((a, b) => a - b);
    answer.push(s[0]);
    answer.push(s[s.length - 1]);
    answer = String(answer.join(" "));
    return answer;
}
