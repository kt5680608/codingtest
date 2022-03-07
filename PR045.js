// 숫자의 표현
function solution(n) {
    let flag = 1;
    let value = flag;
    let sum = 0;
    let answer = 0;
    while (true) {
        sum += value;
        value++;
        if (sum === n) {
            answer++;
            sum = 0;
            flag++;
            value = flag;
        } else if (sum > n || value > n) {
            sum = 0;
            flag++;
            value = flag;
        }
        if (flag > n) {
            break;
        }
    }
    return answer;
}
