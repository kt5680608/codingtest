// 최대공약수와 최소공배수
function solution(n, m) {
    let answer = [];
    let lcm = Math.max(n, m);
    let gcd = Math.min(n, m);
    while (true) {
        if (n % gcd === 0 && m % gcd === 0) {
            answer.push(gcd);
            break;
        }
        gcd--;
    }
    while (true) {
        if (lcm % n === 0 && lcm % m === 0) {
            answer.push(lcm);
            break;
        }
        lcm++;
    }
    return answer;
}
