// 타겟 넘버
function solution(numbers, target) {
    let answer = 0;
    function DFS(value, index) {
        index++;
        if (index === numbers.length) {
            if (value === target) {
                answer++;
            }
        } else {
            DFS(value + numbers[index], index);
            DFS(value - numbers[index], index);
        }
    }
    DFS(-1 * numbers[0], 0);
    DFS(numbers[0], 0);
    return answer;
}
