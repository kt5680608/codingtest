function staircase(n) {
    let answer = "";
    for (let i = 1; i <= n; i++) {
        for (let j = n - 1; j >= i; j--) {
            answer += " ";
        }
        for (let k = 1; k <= i; k++) {
            answer += "#";
        }
        answer += "\n";
    }
    console.log(answer);
}
