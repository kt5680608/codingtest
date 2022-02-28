// 예산
function solution(d, budget) {
    let answerCount = 0;
    let maxBudget = budget;
    d.sort((a, b) => a - b);
    d.forEach((cost) => {
        if (maxBudget - cost >= 0) {
            answerCount++;
            maxBudget = maxBudget - cost;
        }
    });
    return answerCount;
}
