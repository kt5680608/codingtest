// 기능 개발
function solution(progresses, speeds) {
    let cost = [];
    let answer = [];
    // 남은 시간 구하기
    for (let i = 0; i < progresses.length; i++) {
        cost.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    let count = 1;
    let curMax = cost[0];
    for (let i = 1; i < cost.length; i++) {
        if (curMax >= cost[i]) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            curMax = cost[i];
        }
        if (i === cost.length - 1) {
            answer.push(count);
        }
    }
    return answer;
}
