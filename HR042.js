// Sequence Equation
function permutationEquation(p) {
    let len = p.length;
    let answer = [];
    for (let i = 1; i <= len; i++) {
        let num = p.indexOf(i) + 1;
        answer.push(p.indexOf(num) + 1);
    }
    return answer;
}
