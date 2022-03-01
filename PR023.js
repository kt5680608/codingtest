// 나머지가 1이 되는 수 찾기
function solution(n) {
    let count = 1;
    while (n % count !== 1) {
        count++;
    }
    return count;
}
