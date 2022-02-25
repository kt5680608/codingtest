// Electronics Shop
function getMoneySpent(keyboards, drives, b) {
    let answer = 0;
    keyboards.forEach((keyboard) => {
        drives.forEach((drive) => {
            if (keyboard + drive <= b) {
                answer = Math.max(answer, keyboard + drive);
            }
        });
    });
    if (answer === 0) {
        return -1;
    }
    return answer;
}
