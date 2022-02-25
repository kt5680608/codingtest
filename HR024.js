// Picking Numbers
function pickingNumbers(a) {
    a.sort((a, b) => a - b);
    let standard = a[0];
    let answer = 0;
    let current = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] - standard < 2) {
            current++;
        } else {
            standard = a[i];
            answer = Math.max(current, answer);
            current = 1;
        }
    }
    // 모는 숫자가 같을 경우 else문을 못 돌기 때문에 마지막에 다시 검사
    return answer > current ? answer : current;
}
