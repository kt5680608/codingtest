// 두개 뽑아서 더하기
function solution(numbers) {
    let answer = [];
    let numArr = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            numArr.push(numbers[i] + numbers[j]);
        }
    }
    answer = numArr.filter((value, index) => {
        return numArr.indexOf(value) === index;
    });
    answer.sort((a, b) => a - b);
    return answer;
}
