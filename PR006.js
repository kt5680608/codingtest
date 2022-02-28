// k번째 수
function solution(array, commands) {
    let answer = [];
    for (let i = 0; i < commands.length; i++) {
        let newArr = [];
        newArr = array.slice(commands[i][0] - 1, commands[i][1]);
        newArr.sort((a, b) => a - b);
        answer.push(newArr[commands[i][2] - 1]);
    }
    return answer;
}
