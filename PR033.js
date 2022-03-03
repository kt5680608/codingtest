// 영어 끝말잇기
function solution(n, words) {
    let count = 1;
    let answer = [];
    for (let i = 0; i < words.length - 1; i++) {
        count++;
        let word = words[i].split("");
        let wordNext = words[i + 1].split("");
        let member = count % n;
        let memberCount = Math.ceil(count / n);
        if (member === 0) member = n;
        if (member > n) member = 1;
        if (
            word[word.length - 1] === wordNext[0] &&
            words.indexOf(words[i]) === i &&
            words.indexOf(words[i + 1]) === i + 1
        ) {
        }
        // 끝말잇기 실패 or 단어 중복
        else if (
            word[word.length - 1] !== wordNext[0] ||
            words.indexOf(words[i + 1]) !== i + 1
        ) {
            answer.push(member);
            answer.push(memberCount);
            break;
        }
    }
    if (answer.length === 0) {
        answer.push(0);
        answer.push(0);
    }
    return answer;
}
