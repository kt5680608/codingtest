// 하샤드 수
function solution(x) {
    let arr = String(x).split("");
    let sum = 0;
    arr.forEach((value) => {
        sum += Number(value);
    });
    return x % sum === 0 ? true : false;
}
