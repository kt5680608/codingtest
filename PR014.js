// 자연수 뒤집어 배열로 만들기
function solution(n) {
    let answer = String(n).split("");
    answer.reverse();
    answer.forEach((num, index) => {
        answer.splice(index, 1, Number(num));
    });
    return answer;
}
