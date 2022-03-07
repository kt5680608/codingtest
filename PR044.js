// 다음 큰 숫자
function solution(n) {
    let count = 0;
    let binaryN = n.toString(2).split("");
    for (let i = 0; i < binaryN.length; i++) {
        if (binaryN[i] === "1") {
            count++;
        }
    }
    while (true) {
        n++;
        let binaryAnswer = n.toString(2).split("");
        let answerCount = 0;
        for (let i = 0; i < binaryAnswer.length; i++) {
            if (binaryAnswer[i] === "1") {
                answerCount++;
            }
        }
        if (count === answerCount) {
            break;
        }
    }
    return n;
}
