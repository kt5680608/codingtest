// Find Digits
function findDigits(n) {
    let number = String(n);
    let numberArr = [];
    let answer = 0;
    numberArr = number.split("");
    numberArr.forEach((num) => n % num === 0 && answer++);
    return answer;
}
