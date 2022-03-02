// 모의고사
function solution(answers) {
    var answer = [];
    let first = [1, 2, 3, 4, 5];
    let second = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let firstCount = 0;
    let secondCount = 0;
    let thirdCount = 0;
    for (let i = 0; i < answers.length; i++) {
        if (first[i % 5] === answers[i]) {
            firstCount++;
        }
        if (second[i % 8] === answers[i]) {
            secondCount++;
        }
        if (third[i % 10] === answers[i]) {
            thirdCount++;
        }
    }
    let max = Math.max(Math.max(firstCount, secondCount), thirdCount);

    for (let i = 0; i < 3; i++) {
        if (max === firstCount) {
            answer.push(1);
            firstCount = 0;
        }
        if (max === secondCount) {
            answer.push(2);
            secondCount = 0;
        }
        if (max === thirdCount) {
            answer.push(3);
            thirdCount = 0;
        }
    }
    return answer.sort((a, b) => a - b);
}
